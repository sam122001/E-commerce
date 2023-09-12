import React from "react";
import "../style/home.css"
import { Link } from "react-router-dom";
import bannerimage from "../assets/Art.jpg"

function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="home" style={{ backgroundImage: `url(${bannerimage})` }} >
      <div className="headerContainer" >
        <h1>Art Station</h1>
      <p>DAVINCI'S FAVORITE</p>
      <Link to="/menu">
      <button>ORDER NOW </button>
      </Link>
      </div>
    </div>
    </>
  );
}

export default Home;
