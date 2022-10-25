import React from "react";
import DoubleEllipse from "../../assets/DoubleEllipse.png";
import rectangleimg from "../../assets/Rectangle 622.png";
import frameimg from "../../assets/Frame.png";
import rightimg from "../../assets/Ellipse 8.png";
import "./HeaderAbout.css";
const About = () => {
  return (
    <div className="header-about-container">
      <div className="left-img">
        <img src={DoubleEllipse} className="leftimg" alt="" />
      </div>
      <div className="about-info">
        <div className="headerTitle">ABOUT US</div>
        <img src={rectangleimg} alt="" />
        <h2>GET TO KNOW ABOUT OUR VISION AND OUR TEAM</h2>
      </div>
      <div className="frame-img">
        <img src={frameimg} alt="" />
      </div>
      <div className="right-ellipse">
        <img className="imgRightEllipse" src={rightimg} alt="" />
      </div>
    </div>
  );
};

export default About;
