import React from "react";
import "./index.css";
import HeaderAbout from "./HeaderAbout.jsx";
import AboutUsall from "./Aboutusall.js";
import OurTeam from "./OurTeam";
import ContactUs from "../General/ContactUs";
import Footer from "../General/Footer";
import Navbarnew from "../General/Navbar";
import NewFooter from "../General/newFooter.js";

function AboutUs() {
  return (
    <div className="aboutUsWrapper">
        <Navbarnew></Navbarnew>
      <HeaderAbout></HeaderAbout>
      <AboutUsall></AboutUsall>
      <OurTeam></OurTeam>
      {/* <ContactUs></ContactUs> */}
      {/* <Footer></Footer> */}
      <NewFooter/>
    </div>
  );
}

export default AboutUs;
