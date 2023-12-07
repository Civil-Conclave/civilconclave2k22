import React from "react";
import Footer from "../General/Footer";
import SponsorNav from "./SponsorNav.js";
import Navbarnew from "../General/Navbar";


function Sponsornav() {
    return (
      <>
        <Navbarnew></Navbarnew>
      <SponsorNav></SponsorNav>
        <Footer></Footer>
      </>
    );
  }
  
  export default Sponsornav;