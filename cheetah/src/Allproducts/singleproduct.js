import React from 'react'

export const Singleproduct = ({product, addtocart}) => {
    const {id,name,img,cards,price} = product

  return (
    <div className='singleproduct'>
        <div className="product">
            <h1>{name}</h1>
            <div className="cards">
                {cards.map((card)=>{
                    return(
                        <div>
                        <div className="singlecard" key={card.id}>
                            <p className="amount-per-serving">{card.name}</p>
                            <p className="Total-fat">{card.cl}</p>
                            <p className="percentage">{card.percentage}</p>
                        </div>
                        
                       
                        </div>
                    )
                })}
            </div>
            {console.log(price)}
            <div className="cost">{price+'$'}</div>
            <button onClick={()=>addtocart(id)}>Add to cart</button>
        </div>
        <img src={img} alt="" />
    </div>
  )
}
