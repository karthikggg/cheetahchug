import React from 'react'

export const Singleproduct = ({product, addtocart}) => {
    const {id,name,img,cards,price} = product

  return (
    <div>
        <div className='singleproduct'>
           <div style={{display:'grid' , justifyContent:'center' , alignItems:'center'}}> <img src={img} alt="" /></div>
        <div className="product">
            <h1>{name}</h1>
            <div className="cards">
                {cards.map((card)=>{
                    return(
                        <div className='overall-card' key={card.id}>
                        <div className="singlecard" >
                            <p className="amount-per-serving">{card.name}</p>
                            <p className="Total-fat">{card.cl}</p>
                            <p className="percentage">{card.percentage}</p>
                        </div>
                        
                       
                        </div>
                    )
                })}
            </div>
            <div className="cost">{price+'$'}</div>
            <button onClick={()=>addtocart(id)}>Add to cart</button>
        </div>
        
    </div>
    <hr />
    </div>
  )
}
