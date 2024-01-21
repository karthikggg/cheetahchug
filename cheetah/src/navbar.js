import React, { useState } from 'react'
import navbar from './home/data';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link, animateScroll as scroll } from "react-scroll";
import { Cartcount } from './cartcount';





export const Navbar = ({displaycart, discart , cartitem}) => {
    const [nav , setnav] = useState(navbar)
    const [responsivebar, setresponsivebar] = useState(false)
    console.log(discart);
  return (
    <div className='navbar'>
        <Link to='home' smooth={true} duration={500}><img src="./assets/logo.png" alt="" className="logo" /></Link>
        <div className={responsivebar?'heading' : 'resbar'}>
            {navbar.map((nav)=>{
                console.log((nav.compname));
                return(
                    <Link className='link'  to={nav.compname} smooth={true} duration={500} key={nav.id}>{nav.name}</Link> 
                )
            })}
        </div>
        <div className="login">
            <button>Register</button>
            <div style={{position:'relative'}}>
            <HiOutlineShoppingCart size={40} onClick={()=>displaycart(!discart)} />
            <div className='cart-counts'><Cartcount cartitem={cartitem} /></div>
            </div>
        </div>
    </div>
  )
}
