import React, { useState } from 'react'
import navbar from './home/data';
import { HiOutlineShoppingCart } from "react-icons/hi2";



export const Navbar = ({displaycart, discart}) => {
    const [nav , setnav] = useState(navbar)
    console.log(discart);
  return (
    <div className='navbar'>
        <img src="./assets/logo.png" alt="" className="logo" />
        <div className="heading">
            {navbar.map((nav)=>{
                return(
                    <li  key={nav.id}><a href='#cart'>{nav.name}</a></li> 
                )
            })}
        </div>
        <div className="login">
            <button>Register</button>
            <HiOutlineShoppingCart size={40} onClick={()=>displaycart(!discart)} />
        </div>
    </div>
  )
}
