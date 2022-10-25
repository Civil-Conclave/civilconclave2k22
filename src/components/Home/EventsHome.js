import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";
import Event3 from "../../assets/Event3.png";
import Event4 from "../../assets/Event4.png";
import "./EventsHome.css";
import prevbtn from "../../assets/prevbtn.png";
import nextbtn from "../../assets/nextbtn.png";

function Events() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const [prevPos, setPrevPos] = useState(50);
  const [nextPos, setNextPos] = useState(1450);
  const scrollerPrev = (scrollOffset) => {
    console.log(ref.current.scrollLeft);
    ref.current.scrollLeft += scrollOffset;
    console.log("scrollLeft is", ref.current.scrollLeft);
    setPrevPos(prevPos - width / 4);
    setNextPos(nextPos - width / 4);
    setIsActive(true);
  };
  const scrollerNext = (scrollOffset) => {
    console.log(ref.current);
    ref.current.scrollLeft += scrollOffset;
    console.log("scrollLeft is", ref.current.scrollLeft);
    setPrevPos(prevPos + width / 4);
    setNextPos(nextPos + width / 4);
    setIsActive(true);
  };

  return (
    <div className="bigcontainer" ref={ref}>
      <button
        className="prevButton"
        style={{
          left: prevPos,
        }}
        onClick={() => scrollerPrev(-width / 4)}
      ></button>
      <button
        className="nextButton"
        style={{
          left: nextPos,
        }}
        onClick={() => scrollerNext(width / 4)}
      ></button>
      <div className="eventHomeContainer">
        <section>
          <div className="sec1">
            <img className="eventImages" src={Event1} alt="/" />
            <div className="eventName event1">Event1</div>
          </div>
          <div className="sec2">
            <img className="eventImages" src={Event2} alt="/" />
            <div className="eventName event2">Event2</div>
          </div>
          <div className="sec3">
            <img className="eventImages" src={Event3} alt="/" />
            <div className="eventName event3">Event3</div>
          </div>
          <div className="sec4">
            <img className="eventImages" src={Event4} alt="/" />
            <div className="eventName event4">Event4</div>
          </div>
          <div className="sec5">
            <img className="eventImages" src={Event4} alt="/" />
          </div>
          <div className="sec6">
            <img className="eventImages" src={Event4} alt="/" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
