import React,{useState,useEffect} from  'react';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Tab from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cart from './pages/Cart';
import axios from 'axios';


function Main() {
  
  //define state
  const [Products,setProducts]=useState([])
  const [cartItem,setCartItem]=useState([])
  const [total,setTotal]=useState(0)

  //data fetching
  useEffect(() => {
    axios.get("../All.json")
    .then((res) => {setProducts(res.data)});
  }, []);
  
  //addToCart Functionality
  const addToCart=(item)=>{
    let notPresent=false;
    let updatedCart=cartItem.map((data)=>{
      if(data.name == item.name){
        notPresent=true;
        data.cartQuant++;
        return data
      }else{
        return data
      }

    })
    if(!notPresent){
      updatedCart.push({
        name:item.name,
        image:item.image,
        price:item.price,
        cartQuant:1
      })
    }
    setCartItem(updatedCart)
    calculateTotal(item.price)

  }
  const removeFromCart=(item)=>{
    let notPresent=false;
    let updatedCart=cartItem.map((data)=>{
      if(data.name == item.name){
        notPresent=true;
        data.cartQuant--;
        return data
      }else{
        return data
      }
      
    })
    setCartItem(updatedCart)
  }

  const calculateTotal=(price)=>{
      setTotal(total+price)
  }
  console.log(total,"total")
  console.log(cartItem,"cartItem")
  return (
    <div className='App'>
      <Router>
        <Navbar cartLength={cartItem.length}/>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Menu" element={<Menu  Products={Products} addToCart={addToCart}/>}></Route>
            <Route path="/About" element={<Tab />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart cartItem={cartItem} removeFromCart={removeFromCart} addToCart={addToCart}/>}></Route>
          </Routes>
        </Router>
        <Footer/> 

    </div>
  );
}

export default Main;
