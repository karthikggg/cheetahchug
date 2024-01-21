import './App.css';
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Home } from './home/homepage';
import { Ingrediants } from './ingridiants/ingrediants';
import { Video } from './video';
import { Producsts } from './Allproducts/producsts';
import Allproductsdata from './productsdata';
import { Cart } from './cart/cart';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Cartcount } from './cartcount';



// eslint-disable-next-line
function App() {
const [cartitem , setcartitem] = useState([])
const [discart , setdiscart] = useState(false)

const addtocart = (id) => {
  Allproductsdata.filter((cartproduct)=>{
    if(cartproduct.id == id){
    setcartitem([...cartitem ,cartproduct])
    }
  })
}

const deletecartitem = (id) =>{
  setcartitem(cartitem.filter((del)=> del.id != id))
  console.log(cartitem);
  console.log(id);

}


const displaycart =(trueorfalse) =>{
setdiscart(trueorfalse)
console.log(discart);

}



  return (
    <div className="">
      
      <div className={discart? 'all-content' : 'content'}>
        <Navbar displaycart={displaycart} discart={discart} cartitem={cartitem}  />
        <Home />
        <Ingrediants />
        <Video />
        <Producsts products={Allproductsdata}   addtocart={addtocart}/>
        <Footer />
      </div>
      <div className={discart? 'none' : 'dis'}>
          <Cart displaycart={displaycart} cartitem={cartitem}  deletecartitem={deletecartitem}  discart={discart}/>
      </div>
    </div>
  );
}

export default App;
