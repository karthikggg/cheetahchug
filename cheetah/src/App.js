import './App.css';
import React, { useState } from "react";
import { Home } from './home/homepage';
import { Ingrediants } from './ingridiants/ingrediants';
import { Video } from './video';
import { Producsts } from './Allproducts/producsts';
import Allproductsdata from './productsdata';
import { Cart } from './cart/cart';



function App() {
const [cartitem , setcartitem] = useState([])
console.log(cartitem);


const addtocart = (id) => {
  Allproductsdata.filter((cartproduct)=>{
    if(cartproduct.id == id){
    setcartitem([...cartitem ,cartproduct])
    }
  })
}

const deletecartitem = (event,id) =>{
  setcartitem(cartitem.filter((del)=> cartitem.id === id))
}



  return (
    <div className="App">
      <div>

        <Home />
        <Ingrediants />
        <Video />
        <Producsts products={Allproductsdata}   addtocart={addtocart}/>
        <Cart cartitem={cartitem} deletecartitem={deletecartitem} />
  
      </div>
   
    </div>
  );
}

export default App;
