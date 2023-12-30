import './App.css';
import React, { useState } from "react";
import { Home } from './home/homepage';
import { Ingrediants } from './ingridiants/ingrediants';
import { Video } from './video';
import { Producsts } from './Allproducts/producsts';
import Allproductsdata from './productsdata';




function App() {
const [cartitem , setcartitem] = useState([])
console.log(cartitem);
const addtocart = (id) => {
  console.log();
  setcartitem(Allproductsdata)
  Allproductsdata.filter((cartproduct)=>{
    if(cartproduct.id == id){
    setcartitem([...cartitem ,cartproduct])
    }
    
    
  })
  

}

  return (
    <div className="App">
      <div>

        <Home />
        <Ingrediants />
        <Video />
        <Producsts products={Allproductsdata}  addtocart={addtocart}/>
  
      </div>
   
    </div>
  );
}

export default App;
