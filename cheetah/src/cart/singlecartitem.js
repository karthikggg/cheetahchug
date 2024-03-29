import React, { useState } from 'react'

export const Singlecartitem = ({singlecartitem , deletecartitem}) => {
  const handlesubmit =()=>{

  }
  return (
    <div className='cart-main'>
  
      <img src={singlecartitem.img} alt="" />
      <div className="cartproductinfo">
        <div className="cartproductname">{singlecartitem.name}</div>
        <div className="instock">In stock</div>
        <div className="freeship">Eligible for free shipping</div>
        <form action="" onSubmit={handlesubmit()}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id='quantity' min={1} placeholder='1'/>
        </form>
        <div className="price">{singlecartitem.price + '$'}</div>
        <a onClick={()=>deletecartitem(singlecartitem.id)} >delete</a>
        

      </div>
    </div>
  )
}
