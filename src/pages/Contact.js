import React, { useState } from "react";
import pizzaleft from "../assets/contact.jpg";
import "../style/contact.css";

const Contact=()=>{
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaleft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form id="contact-form" method="post" >
          <label>Full name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
          ></input>
          <label>Email </label>
          <input name="email" placeholder="Enter email..." type="email"></input>
          <label>Message </label>
          <textarea
            rows="6"
            placeholder="Send us your message"
            type="message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
