import React from 'react'
import { Singleproduct } from './singleproduct'



export const Producsts = ({products, addtocart}) => {
  return (
    <div>
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
