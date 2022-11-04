import React from "react";
import "./Landing.css";
// import LandingBg from "../../assets/BgHome1.png";
import LandingBg from "../../assets/BackgroundBlueBg.png";
import { motion } from "framer-motion";

function HomePage() {
  function onPress(e) {
    window.open(
      "https://drive.google.com/file/d/1AYeE72HbkTBC8EF8A5puFZW0MNfc1094/view?usp=sharing"
    );
  }
  return (
    <div className="WrapperLanding">
      <div className="landingBg">
        <img className="landingImg" src={LandingBg} alt="/" />
      </div>
      <div className="landingInfo">
        <div className="teamInfo">
          <div className="teamName">
            Inter IIT Civil Conclave 20<span className="teamYear">22</span>
          </div>
          <div className="teamPresents">Presents</div>
        </div>
        <motion.div
          className="ThemeHeading"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="ThemeName">FORTIFYING</h1>
          <h1 className="ThemeName colorblue"> FUTURE</h1>
        </motion.div>
        <div className="Date">24-26 December</div>
        <div className="ThemeInfo">
          Unravish and explore the deeper insights with this
          <br /> Inter IIT fest dedicated to civil engineers. Dive right in...
        </div>
        <button className="btnRegister" onClick={onPress}>
          Register
        </button>
      </div>
    </div>
  );
}

export default HomePage;
