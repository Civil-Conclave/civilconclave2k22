import React, { useState, useRef, useEffect } from "react";
import "./EventsAll.css";
import data from "./data";
import { motion, useScroll } from "framer-motion";
import Scroller from "./Scroller.js";
const Events = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log("myRef kth is ", entry);
    if (entry.isIntersecting) {
      setCurrevent(entry.target.textContent);
      // yeh textContent vaali cheez console se nikal li maine
    }
  };

  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);
  const [currevent, setCurrevent] = useState("");

  useEffect(() => {
    const observer1 = new IntersectionObserver(callbackFunction, options);
    if (myRef1.current) observer1.observe(myRef1.current);
    return () => {
      if (myRef1.current) observer1.unobserve(myRef1.current);
    };
  }, [myRef1, options]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(callbackFunction, options);
    if (myRef2.current) observer2.observe(myRef2.current);

    return () => {
      if (myRef2.current) observer2.unobserve(myRef2.current);
    };
  }, [myRef2, options]);

  useEffect(() => {
    const observer3 = new IntersectionObserver(callbackFunction, options);
    if (myRef3.current) {
      observer3.observe(myRef3.current);
    }
    return () => {
      if (myRef3.current) observer3.unobserve(myRef3.current);
    };
  }, [myRef3, options]);
  useEffect(() => {
    const observer4 = new IntersectionObserver(callbackFunction, options);
    if (myRef4.current) observer4.observe(myRef4.current);

    return () => {
      if (myRef4.current) observer4.unobserve(myRef4.current);
    };
  }, [myRef4, options]);
  useEffect(() => {
    const observer5 = new IntersectionObserver(callbackFunction, options);
    if (myRef5.current) observer5.observe(myRef5.current);

    return () => {
      if (myRef5.current) observer5.unobserve(myRef5.current);
    };
  }, [myRef5, options]);

  return (
    <div className="EventsAllWrapper">
      <div className="Scroller">
        <Scroller currevent={currevent}></Scroller>
      </div>
      <div className="allEvents" id="allEvents">
        <div className="whole-eventscontainer">
          <div className="eventHeadingNew">
            <h3>{data[0].title}</h3>
            <p>
              {data[0].body1}
              <br />
              <br />
              {data[0].body2}
              <br />
              <br />
              {data[0].body3}
              <br />
              <br />
              {data[0].body4}
            </p>
            <h4>Register</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="img">
            <h1 ref={myRef1}>{data[0].imgtitle}</h1>
            <img src={data[0].url} alt="" />
          </div>
        </div>
        <div className="whole-eventscontainer">
          <div className="eventHeadingNew">
            <h3>{data[1].title}</h3>
            <p>
              {data[1].body1}
              <br />
              <br />
              {data[1].body2}
              <br />
              <br />
              {data[1].body3}
              <br />
              <br />
              {data[1].body4}
            </p>
            <h4>Register</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="GuestLlecture-img">
            <h1 ref={myRef2}>{data[1].imgtitle}</h1>
            <img src={data[1].url} alt="" />
          </div>
        </div>
        <div className="whole-eventscontainer">
          <div className="Resarch-heading">
            <h3>{data[2].title}</h3>
            <p>
              {data[2].body1}
              <br />
              <br />
              {data[2].body2}
              <br />
              <br />
              {data[2].body3}
              <br />
              <br />
              {data[2].body4}
            </p>
            <h4>Register</h4>
          </div>
          <div className="Resarch-img">
            <h1 ref={myRef3}>{data[2].imgtitle}</h1>
            <img src={data[2].url} alt="" />
          </div>
        </div>
        <div className="whole-eventscontainer">
          <div className="eventHeadingNew">
            <h3>{data[3].title}</h3>
            <p>
              {data[3].body1}
              <br />
              <br />
              {data[3].body2}
              <br />
              <br />
              {data[3].body3}
              <br />
              <br />
              {data[3].body4}
            </p>
            <h4>Register</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="img">
            <h1 ref={myRef4}>{data[3].imgtitle}</h1>
            <img src={data[3].url} alt="" />
          </div>
        </div>
        <div className="whole-eventscontainer">
          <div className="eventHeadingNew">
            <h3>{data[4].title}</h3>
            <p>
              {data[4].body1}
              <br />
              <br />
              {data[4].body2}
              <br />
              <br />
              {data[4].body3}
              <br />
              <br />
              {data[4].body4}
            </p>
            <h4>Register</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="img">
            <h1 ref={myRef5}>{data[4].imgtitle}</h1>
            <img src={data[4].url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
