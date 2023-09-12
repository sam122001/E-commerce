import React, { useState } from "react";
import pizzaleft from "../assets/dragon.jpg";
import "../style/contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");    
  const [price, setPrice] = useState(""); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/AllProducts", { name, image, price })
      .then((result) => {
        console.log(result);
        if (result.data) {
          toast.success('Successfully Added!');
          // Reset form fields after successful submission
          setName("");
          setImage("");
          setPrice("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact">
      <div className="rightSide">
        <h1>Add Art Details</h1>
        <ToastContainer />
        <form id="contact-form" method="post" onSubmit={handleSubmit}>
        <label>Product name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Image url</label>
          <input
            name="image"
            placeholder="Enter image url..."
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>price</label>
          <input
            name="price"
            placeholder="Enter price..."
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="leftSide" style={{ backgroundImage: `url(${pizzaleft})` }}></div>
    </div>
  );
}

export default Contact;
