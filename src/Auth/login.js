import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import "../style/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {email, password })
      .then((result) => {
        console.log(result);
        if (result.data==="email not registered") {
          toast.error("Login failed: Wrong email or password");
        }
        else {
          localStorage.setItem("role",result.data.role)
          navigate("/home")
          // You can show an error message to the user here if you'd like
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={loginContainerStyle} className="body">
    <div className="container" >
      <div>
        <h2>~~ Login ~~</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
          <div className="mb-3">
            {/* <label htmlFor="email">
              <strong>Password</strong>
            </label> */}
            <input
              type="password"
              placeholder="enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="lsInput"
            ></input>
          </div>
          <button type="submit" className="lsButton">
            Login
          </button>
        </form>
        <p>Already have an Account</p>
        <div className="button-link-container">
        <Link
          to="/signup" className="button-link"
          >
          Register
        </Link>
        </div>
      </div>
    </div>
      </div>
  );
}
export default Login;