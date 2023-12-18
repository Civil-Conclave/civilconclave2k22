import React from "react";
import "./HeaderEvents.css";
import Ellipse from "../../assets/Ellipse1.png";
function HeaderEvents(props) {
  const handleClick1 = () => {
    props.ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    props.ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    props.ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    props.ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick5 = () => {
    props.ref5.current?.scrollIntoView({ behavior: "smooth" });
  };
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
        <button className="footText" onClick={handleClick1}>
          Case Study
        </button>
        <button className="footText" onClick={handleClick2}>
          Guest Lecture
        </button>
        <button className="footText" onClick={handleClick3}>
          Research work Presentation
        </button>
        <button className="footText" onClick={handleClick4}>
          Seek the Civil Geek
        </button>
        <button className="footText" onClick={handleClick5}>
          Design Different
        </button>
      </div>
      <div className="footLine">
        <div className="line"></div>
      </div>
    </div>
  );
}
export default HeaderEvents;
