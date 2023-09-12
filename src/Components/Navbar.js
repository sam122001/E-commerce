import React, { useState } from "react";
import logo from "../assets/light.png";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import "../style/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
function Navbar({cartLength}) {
    const [Data,setData]=useState(false)
    const userRole=localStorage.getItem('role')
    console.log(userRole)
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
    
          <div className='rightSide'>
          {userRole === 'Admin' && <AdminNav />}
        {userRole === 'User' && <UserNav   />}
          </div>
 
    )
  }
  
  export default Navbar