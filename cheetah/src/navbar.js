import React, { useState , useEffect } from 'react'
import navbar from './home/data';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link, animateScroll as scroll } from "react-scroll";
import { Cartcount } from './cartcount';
import { IoReorderThreeOutline } from "react-icons/io5";





export const Navbar = ({displaycart, discart , cartitem}) => {
    const [nav , setnav] = useState(navbar)
    const [responsivebar, setresponsivebar] = useState(false)
    const [ threedot , setthreedot] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    
 
    const handlewidth =() =>{
        setWidth(window.innerWidth)
        if(width >= 918){
            setthreedot(false)
        }
        else{
            setthreedot(true)
        }
        

    }

    useEffect(()=>{
        window.addEventListener('resize' , handlewidth)
        return () => window.removeEventListener('resize' , handlewidth)

        
    })
   
  return (
    <div className='navbar'   >
        <Link to='home' smooth={true} duration={500}><img src="./assets/logo.png" alt="" className="logo" /></Link>
        <div className={threedot ? "unvisible" : 'heading'}  >
           
           {navbar.map((nav)=>{
                return(
                   <div className={responsivebar? 'linkss' : ''}>
                        <Link  className='link'  to={nav.compname} smooth={true} duration={500} key={nav.id}>{nav.name}</Link> 
                   </div>
                )
            })}
           
        </div>
        <div className="login">
            <button className={threedot? 'displaynone' :''}>Register</button>
            <div style={{position:'relative'}}>
             <div className="carticon"><HiOutlineShoppingCart size={40} onClick={()=>displaycart(!discart)} /></div>
             <div className='cart-counts'><Cartcount cartitem={cartitem} /></div>
            </div>
            <IoReorderThreeOutline onClick={()=>setresponsivebar(!responsivebar)} size={50} className={threedot ? 'threedot' : 'displaynones'} />
        </div>
    </div>
  )
}
