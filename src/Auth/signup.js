import React from "react";
import {Link} from 'react-router-dom'
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css"
import loginImage from "../assets/abot1.jpg"


function SignupForm() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [role,setRole]=useState()
  const navigate = useNavigate();

  const loginContainerStyle = {
    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/07/08/56/close-up-1721060_1280.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", /* Set the height to occupy the entire viewport */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password,role})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div style={loginContainerStyle} className="body">
    <div className="container">
      <div >
        <h2>~~ Register ~~</h2>
        <form onSubmit={handleSubmit} className="form">
          <div >
            {/* <label htmlFor="email">
              <strong>Name</strong>
            </label> */}
            <input
              type="text"
              placeholder="enter name"
              autoComplete="off"
              name="email"
              onChange={(e) => setName(e.target.value)}
              className="lsInput"
              required
            ></input>
          </div>
          <div >
            {/* <label htmlFor="email">
              <strong>Email</strong>
            </label> */}
            <input
              type="email"
              placeholder="enter mail"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="lsInput"
            ></input>
          </div>
          <div >
            {/* <label htmlFor="email">
              <strong>Password</strong>
            </label> */}
            <input
              type="password"
              placeholder="enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="lsInput"
            ></input>
            
          </div>
          <div >
            {/* <label htmlFor="email">
              <strong>Password</strong>
            </label> */}
            {/* <input
              type="password"
              placeholder="enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="lsInput"
            ></input> */}
             <select value={role}  onChange={(e) => setRole(e.target.value)} className="lsInput">
        <option value="">Select an option</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
            
          </div>
          <button type="submit" className="lsButton">
            Register
          </button>
        </form>
        <p>Already have an Account</p>
        <div className="button-link-container">
        <Link
          to="/" className="button-link"
          >
          Login
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignupForm;
