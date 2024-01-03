import React, { useState } from 'react'
import ingrediants from './ingrediantdata'
import { Singleingrediants } from './single';




export const Ingrediants = () => {
const [ingrediant , setingrediant] = useState(ingrediants)

  return (
    <div className='ingrediants'>
    <img src="./assets/ingredieant.jpg" alt="" />
    <div className="ingrediant-component">
        <h1 className='heading'>Ingrediants.</h1>
        {
            ingrediant.map((ing)=>{
               return(
                <Singleingrediants key={ing.id} ingrediant={ing}  />
               )
            })
        }
    </div>
    </div>
  )
}
