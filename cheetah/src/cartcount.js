import React from 'react'
import Allproductsdata from './productsdata'
export const Cartcount = ({cartitem}) => {
  return (
    <div className='cart-count'>{cartitem.length}</div>
  )
}
