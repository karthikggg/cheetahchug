import React, { useState } from 'react'
import navbar from './data';
import { HiOutlineShoppingCart } from "react-icons/hi2";


export const Navbar = () => {
    const [nav , setnav] = useState(navbar)
  return (
    <div className='navbar'>
        <img src="./assets/logo.png" alt="" className="logo" />
        <div className="heading">
            {navbar.map((nav)=>{
                return(
                    <li key={nav.id}>{nav.name}</li> 
                )
            })}
        </div>
        <div className="login">
            <button>Register</button>
            <HiOutlineShoppingCart size={40} />
        </div>
    </div>
  )
}
