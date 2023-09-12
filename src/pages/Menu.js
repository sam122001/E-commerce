import React,{useState,useEffect} from "react";
import MenuItem from "../Components/MenuItem";
import "../style/menu.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Carts from "./Cart";

function Menu({Products,addToCart}) {
  return (
    <div className="menu">
      <div className="menuTitle">Our Arts</div>
       <div className="menuList"> 
      {Products.map((data, i) => {
        return (
          <>
            <div className="menuItem">
              <div style={{ backgroundImage: `url(${data.image})` }}></div>
              <h1>{data.name}</h1>
              <p>${data.price}</p>
              <button className="cart" onClick={()=>{addToCart(data)}}>
                <ShoppingCartIcon/>
              </button>
            </div>
          </>
        );
      })}
    </div>

     </div>
  );
}

export default Menu;
