import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BuyTshirts from "./components/BuyTshirts";
import WomenTshirts from "./components/WomenTshirts";
import MenTshirt from "./components/MenTshirt";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import LoginPage from "./components/LoginPage";
import { createGlobalStyle } from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalStyle = createGlobalStyle`
 
 body{
  font-family: "Dosis", sans-serif;
  overflow-y: auto;

 
::-webkit-scrollbar {
  width: 12px;  
}

 
::-webkit-scrollbar-track {
  background: white;  
}

 
::-webkit-scrollbar-thumb {
  background: lightgrey;  
  border-radius: 6px; 
}

 
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;  
  cursor: pointer;
}


 }



`
const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

function App() {

  

  const [cart,setCart] = useState([])

  const AddToCart = (items) =>{
    setCart([...cart,items])
  }


  


  return (
  <>
  <GlobalStyle/>
  <CartContext.Provider value={{cart,AddToCart}} >
  <BrowserRouter>
  <Routes>
  <Route path="/home" element={<HomePage />} />
  <Route path="/shop" element={<BuyTshirts />} />
  <Route path="/women-tshirts" element={<WomenTshirts />} />
  <Route path="/men-tshirts" element={<MenTshirt />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/shop/product/:id" element={<ProductDetails />} />
  <Route path="/" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>
  </CartContext.Provider>
  </>
  );
}

export default App;


