import React from 'react'
import { Singleproduct } from './singleproduct'



export const Producsts = ({products, addtocart}) => {
  return (
    <div>
      <h1 style={{color:'white', justifyContent:'center', display:'flex'}}>PRODUCTS</h1>
      <div style={{marginBottom:'1rem'}} className="underline"></div>
      <div className="productsall">
        {
          products.map((prod)=>{
            return(
              <Singleproduct key={prod.id} product={prod} addtocart={addtocart}  />
            )
          })
        }
      </div>
    </div>
  )
}
