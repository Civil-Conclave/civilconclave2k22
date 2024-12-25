import React from "react";
import "./Landing.css";
// import LandingBg from "../../assets/BgHome1.png";
import LandingBg from "../../assets/BackgroundBlueBg.png";
import { motion } from "framer-motion";

function HomePage() {
  function onPress(e) {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc3Zhcf1PsjXwdrJ8fqZtm_nMogmseHzi8gAqu5DRx1RPr0ww/viewform"
    );
  }
  return (
    <div className="WrapperLanding">
      <div className="landingBg">
        <img className="landingImg" src={LandingBg} alt="/" />
      </div>
      <div className="landingInfo">
        <div className="teamInfo">
          <div className="nirman">
          Nirmaan'<span className="teamYear">25</span>
          </div>
          <div className="teamName">
            IIT Roorkee<span className="teamYear"> Civil Conclave</span>
          </div>
          <div className="teamPresents">Presents</div>
        </div>
        <motion.div
          className="ThemeHeading"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="ThemeName">RESILIENCE</h1>
          <h1 className="ThemeName colorblue"> REVOLUTION</h1>
        </motion.div>
        
        <div className="ThemeInfo">
          Unravish and explore the deeper insights with this
          <br /> Inter IIT fest dedicated to civil engineers. Dive right in...
        </div>
        <button className="btnRegister" onClick={onPress}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default HomePage;
