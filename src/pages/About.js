import React from "react";
import about from "../assets/about.jpg";
import "../style/about.css";
// import { Carousel } from "antd";
import about1 from "../assets/abot1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import { WidthFull } from "@mui/icons-material";
// var Carousel = require("react-responsive-carousel").Carousel;

const contentStyle = {
  // height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  height: "500px",
};

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${about})` }}>
        {/* <Carousel effect="fade" autoplay="true" >
          <div>
            <img style={contentStyle} src="https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg" style={{ height: "80%" }}></img>
          </div>
          <div>
            <img style={contentStyle} src="https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080_1280.jpg"></img>
          </div>
          <div>
            <img style={contentStyle} src="https://cdn.pixabay.com/photo/2017/07/15/15/50/fantasy-2506830_1280.jpg"></img>
          </div>
          <div>
            <img style={contentStyle} src="https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033_1280.jpg"></img>
          </div>
        </Carousel> */}
      </div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Welcome to Art Station, your premier destination for exquisite art
          pieces from talented artists worldwide. At Art Station, we are
          passionate about promoting art and providing a platform for artists to
          showcase their creativity and reach a global audience. Our mission at
          Art Station is to connect art enthusiasts with exceptional artworks,
          making the process of buying and selling art seamless and enjoyable
          for both artists and collectors. We aim to foster a vibrant art
          community and support artists in their artistic journey, helping them
          gain recognition and financial rewards for their hard work and
          dedication. At Art Station, we curate a diverse and handpicked
          selection of artworks, ranging from contemporary paintings and
          sculptures to digital art and photography. Our collection caters to
          various tastes and preferences, ensuring there's something unique and
          inspiring for every art lover. We strongly believe in empowering
          artists and providing them with the recognition they deserve. When you
          purchase art from Art Station, you are directly supporting the
          talented creators behind the masterpieces. We strive to ensure that
          artists receive fair compensation for their work, fostering an
          environment where creativity thrives. Each artwork has a story, and we
          love sharing the journey of the artists behind the creations. Through
          our platform, you can delve into the artists' inspirations,
          techniques, and personal narratives, adding a deeper meaning to the
          art you choose. At Art Station, quality is of the utmost importance.
          We work closely with our artists to ensure that each piece is crafted
          with the utmost care and attention to detail. Furthermore, we
          guarantee the authenticity of every artwork we sell, so you can buy
          with confidence, knowing you are investing in genuine and remarkable
          pieces. We are dedicated to providing a seamless and delightful
          shopping experience for our customers. Our customer support team is
          readily available to assist you with any queries or concerns, ensuring
          your satisfaction from browsing to delivery. Art Station extends an
          invitation to art lovers, collectors, and artists to join our growing
          community. Explore our virtual gallery, connect with fellow
          enthusiasts, and embark on an artistic journey that celebrates
          creativity in all its forms. Thank you for being a part of Art
          Station. Together, let's inspire, appreciate, and create a world where
          art flourishes and touches lives. *Art Station - Where Creativity
          Meets Passion.*
        </p>
      </div>
    </div>
  );
}

export default About;
