import React from "react";
import "./index.css";
import HeaderAbout from "./HeaderAbout.jsx";
import AboutUsall from "./Aboutusall.js";

function AboutUs() {
  return (
    <div className="aboutUsWrapper">
      <HeaderAbout></HeaderAbout>
      <AboutUsall></AboutUsall>
    </div>
  );
}

export default AboutUs;
