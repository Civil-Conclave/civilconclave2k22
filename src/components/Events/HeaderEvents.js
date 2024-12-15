import React from "react";
import "./HeaderEvents.css";
import Ellipse from "../../assets/Ellipse1.png";
import evecircle from "../../assets/event-circle.svg"
import DoubleEllipse from "../../assets/DoubleEllipse.png";
import rightimg from "../../assets/Ellipse 8.png";
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
  const handleClick6 = () => {
    props.ref6.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="eventContainer">
      <div className="events-top">
      <img src={DoubleEllipse} className="leftimg-event" alt="" />
      <img className="imgRightEllipse-event" src={rightimg} alt="" />
      <img className="img-mid-event" src={evecircle} alt="" />
      <img className="img-mid-down-event" src={evecircle} alt="" />
        <div className="headerInfo">
          <div className="headerEventHeading">EVENTS</div>
          <div className="header-line-events"></div>
          <div className="eventDes">GET TO KNOW ABOUT THE EVENTS HAPPENING</div>
        </div>
      </div>

      <div className="footInfo">
        <button className="footText" onClick={handleClick1}>
          Case Study
        </button>
        <button className="footText" onClick={handleClick2}>
          Guest Lecture
        </button>
        <button className="footText" onClick={handleClick3}>
          Research Renaissance
        </button>
        <button className="footText" onClick={handleClick3}>
          Workshop
        </button>
        <button className="footText" onClick={handleClick4}>
          Seek the Civil Geek
        </button>
        <button className="footText" onClick={handleClick5}>
          City Planning
        </button>
        <button className="footText" onClick={handleClick6}>
          Innovista
        </button>
      </div>
      <div className="footLine">
        <div className="line"></div>
      </div>
    </div>
  );
}
export default HeaderEvents;
