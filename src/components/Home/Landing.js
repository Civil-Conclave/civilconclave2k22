import React from "react";
import "./Landing.css";
import LandingBg from "../../assets/BgHome1.png";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="WrapperLanding">
      <div className="landingBg">
        <img className="landingImg" src={LandingBg} alt="/" />
      </div>
      <div className="landingInfo">
        <div className="teamInfo">
          <div className="teamName">
            Civil Conclave 20<span className="teamYear">22</span>
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
        <div className="ThemeInfo">
          Unravish and explore the deeper insights with this
          <br /> Inter IIT fest dedicated to civil engineers. Dive right in...
        </div>
        <button className="btnRegister">Register</button>
      </div>
    </div>
  );
}

export default HomePage;
