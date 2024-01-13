import React, { useState } from 'react'
import { Singlecartitem } from './singlecartitem'
import { IoCloseSharp } from "react-icons/io5";


export const Cart = ({cartitem, deletecartitem ,discart,displaycart}) => {
const [subtotal , setsubtotal] = useState(0)
let a= 0;
{cartitem.map((price)=>{
   a=a+ parseInt(price.price)
  console.log(a);
})}


if (discart) {
  return (
    <div className="displaycart">
    
      <div className="carthead">
       <div className='shopping-cart'>
       <h1>shopping cart</h1>
       <div className="underline"></div>
       </div>
       <div><IoCloseSharp className='IoCloseSharp' onClick={()=>displaycart(false)} size={40} color='#adff2f' /></div>

      </div>
      <div className="subtotal">
        subtotal <div>{` ( ${cartitem.length} )`}</div>
        <div>{ a+"$"}</div>
        <button className='cart-buy-btn'>Checkout</button>
        
      </div>
      <div>{cartitem.map((cart)=>{
        return(
          <div>
            <Singlecartitem singlecartitem={cart} deletecartitem={deletecartitem}  key={cart.id} />
            <hr className='hr' />
          </div>
          
          

        )
      })}</div>
    </div>
  )
}
 
}
