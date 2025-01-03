import React from "react";
import "./Landing.css";
// import LandingBg from "../../assets/BgHome1.png";
import LandingBg from "../../assets/HeroBG.png";
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
        Welcome to Nirmaan'25!
Dive into the world of civil engineering with Nirmaan'25, a national-level fest open to all civil engineering colleges in India.


          <br /> Join us on 18th–19th January 2025 for thought-provoking case studies, engaging workshops, and other exciting events that celebrate innovation and excellence in civil engineering!
        </div>
        <button className="btnRegister" onClick={onPress}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default HomePage;
