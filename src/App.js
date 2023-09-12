import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Tab from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Cart from './pages/Cart';
import axios from 'axios';
import Login from './Auth/login';
import SignupForm from './Auth/signup';
import Navbar from './Components/Navbar';
import AddArt from './pages/AddArt'
function App() {
  // Define state
  const [Products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  // Data fetching
  useEffect(() => {
    axios.get('http://localhost:3001/Allproduct').then((res) => {
      setProducts(res.data);
    });
  }, []);
  // addToCart Functionality
  const addToCart = (item) => {
    let notPresent = false;
    let updatedCart = cartItem.map((data) => {
      if (data.name === item.name) {
        notPresent = true;
        data.cartQuant++;
        return data;
      } else {
        return data;
      }
    });
    if (!notPresent) {
      updatedCart.push({
        name: item.name,
        image: item.image,
        price: item.price,
        cartQuant: 1,
      });
    }
    setCartItem(updatedCart);
    calculateTotal(item.price);
  };
  const removeFromCart = (item) => {
    let notPresent = false;
    let updatedCart = cartItem.map((data) => {
      if (data.name === item.name) {
        notPresent = true;
        data.cartQuant--;
        return data;
      } else {
        return data;
      }
    });
    setCartItem(updatedCart);
  };
  const calculateTotal = (price) => {
    setTotal(total + price);
  };
  console.log(total, 'total');
  console.log(cartItem, 'cartItem');
  // Get the current route
  const location = useLocation();
  // Check if the current route is either "/login" or "/signup"
  const isAuthRoute = location.pathname === '/' || location.pathname === '/signup';
  return (
   <div>
        {!isAuthRoute && <Navbar cartLength={cartItem.length}/>} {/* Render Navbar only if it's not an auth route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Menu" element={<Menu Products={Products} addToCart={addToCart} />} />
          <Route path="/About" element={<Tab />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddArt" element={<AddArt />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} removeFromCart={removeFromCart} addToCart={addToCart} />} />
        </Routes>
        {!isAuthRoute && <Footer />} {/* Render Footer only if it's not an auth route */}
        </div>
  );
}
export default App;







