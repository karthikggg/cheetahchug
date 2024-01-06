import React, { useState } from 'react'
import { Singlecartitem } from './singlecartitem'

export const Cart = ({cartitem, deletecartitem ,discart}) => {


if (discart) {
  return (
    <div className="displaycart">
    
      <div className="carthead">
       <h1>shopping cart</h1>
       <div className="underline"></div>
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
