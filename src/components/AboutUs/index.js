import React from "react";
import "./index.css";
import HeaderAbout from "./HeaderAbout.jsx";
import AboutUsall from "./Aboutusall.js";
import OurTeam from "./OurTeam";
import ContactUs from "../General/ContactUs";
import Footer from "../General/Footer";

function AboutUs() {
  return (
    <div className="aboutUsWrapper">
      <HeaderAbout></HeaderAbout>
      <AboutUsall></AboutUsall>
      <OurTeam></OurTeam>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
