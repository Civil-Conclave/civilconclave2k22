import React from "react";
import "./Landing.css";
// import LandingBg from "../../assets/BgHome1.png";
import LandingBg from "../../assets/HeroBG.png";
import { motion } from "framer-motion";

function HomePage() {
  function onPress(e) {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScf03AXxLkdMzrPH9c_zA0H3HAUSOY-AsinfBmF9UsA-Ge5aw/viewform",
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
            Nirmaan'<span className="teamYear">26</span>
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
          <h1 className="ThemeName">ADAPTIVE</h1>
          <h1 className="ThemeName colorblue">FUTURES</h1>
        </motion.div>

        <div className="ThemeInfo">
          Step into the dynamic world of civil engineering with Nirmaan’26, a
          national-level fest open to civil engineering colleges across India.
          <br/>Join us on 21st–22nd March 2026 for thought-provoking case studies,
          engaging workshops, and a range of exciting events that showcase
          innovation, creativity, and excellence in civil engineering.
        </div>
        <button className="btnRegister" onClick={onPress}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default HomePage;
