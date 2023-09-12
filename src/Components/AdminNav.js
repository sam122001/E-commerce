import React, { useState } from "react";
import logo from "../assets/light.png";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import "../style/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function AdminNav({cartLength}) {
    const [Data,setData]=useState(false)
    
    const handleChange=()=>{
        setData(!Data)
        // if(Data==false)
        // {
        //     setData(true)
        // }else{
        //     setData(false)
        // }
    }
    console.log(Data)
    return (
      <div className='navbar'>
          <div className='leftSide' id={Data? "open":"close"}>
              <img src={logo} style={{height:"100px"}}/>
              <div className="hiddenLinks">
                      <Link to="/About" style={{ padding: 8 }}>About</Link>
                      <Link to="/AddArt" style={{ padding: 8 }}  >Add Art</Link>
                      <Link to="/" style={{ padding: 8 }}  >Log Out</Link>
              </div>
          </div>
          <div className='rightSide'>
                 
                      <Link to="/About" style={{ padding: 8 }}>About</Link>
                      <Link to="/AddArt" style={{ padding: 8 }}  >Add Art</Link>
                      <Link to="/" style={{ padding: 8 }}  >Log Out</Link>

          </div>
      </div>
    )
  }
  
  export default AdminNav