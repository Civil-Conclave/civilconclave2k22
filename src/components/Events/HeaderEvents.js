import React from "react";
import "./HeaderEvents.css";
import Ellipse from "../../assets/Ellipse.png";
function HeaderEvents() {
  return (
    <div className="eventContainer">
      <div className="ellipse">
        <div className="headerInfo">
          <div className="headerEventHeading">EVENTS</div>
          <div className="eventDes">GET TO KNOW ABOUT THE EVENTS HAPPENING</div>
        </div>
        <img src={Ellipse} className="ellipseImg"></img>
      </div>
      <div className="leftStripes">
        <div className="stripes1"></div>
        <div className="space"></div>
        <div className="stripes1"></div>
      </div>
      <div className="rightStripes">
        <div className="stripes2"></div>
        <div className="space"></div>
        <div className="stripes2"></div>
      </div>

      <div className="footInfo">
        <div className="footText">Case Study</div>
        <div className="footText">Guest Lecture</div>
        <div className="footText">Research work Presentation</div>
        <div className="footText">Panel discussion</div>
        <div className="footText">Seek the Civil Geek</div>
        <div className="footText">Design Different</div>
      </div>
      <div className="footLine">
        <div className="line"></div>
      </div>
    </div>
  );
}
export default HeaderEvents;
