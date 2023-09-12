import React from "react";
import "../style/cart.css";
const cart = ({ cartItem,addToCart,removeFromCart }) => {
  return (
    <>
      {cartItem.map((item) => {
        return (
          <>
            <div className="cart-item">
              <img
                src={item.image}
                alt="cart-item"
                className="cart-item-image"
              />
              <div>
                <div>
                  <p className="item-title">{item.name}</p>
                  <span className="cart-item-price">${item.price} </span>
                </div>
                <div>
                  <p className="item-quantity">Quantity:{item.cartQuant} </p>
                  <div>
                    <button className="quantity-btn" onClick={()=>removeFromCart(item)}>-</button>
                    <button className="quantity-btn" onClick={()=>addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            </div> 
          </>
        );
      })}
    </>
  );
};
export default cart;
