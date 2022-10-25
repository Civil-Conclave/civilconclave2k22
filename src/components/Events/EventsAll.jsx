import React from "react";
import "./events.css";
import data from "./data";
const Events = () => {
  return (
    <>
      <div className="event-namecontainer">
        <div className="event-name"> Case Study </div>
        <div className="event-name"> Guest Lecture </div>
        <div className="event-name"> Research Work Presentation </div>
        <div className="event-name"> Panal Discussion </div>
        <div className="event-name"> Seek the civil geek</div>
        <div className="event-name"> Design Different</div>
      </div>
      <div className="whole-eventscontainer">
        <div className="heading">
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
          <h1>{data[0].imgtitle}</h1>
          <img src={data[0].url} alt="" />
        </div>
      </div>
      <div className="whole-eventscontainer">
        <div className="heading">
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
          <h1>{data[1].imgtitle}</h1>
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
          <h1>{data[2].imgtitle}</h1>
          <img src={data[2].url} alt="" />
        </div>
      </div>
      <div className="whole-eventscontainer">
        <div className="heading">
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
          <h1>{data[3].imgtitle}</h1>
          <img src={data[3].url} alt="" />
        </div>
      </div>
      <div className="whole-eventscontainer">
        <div className="heading">
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
          <h1>{data[4].imgtitle}</h1>
          <img src={data[4].url} alt="" />
        </div>
      </div>
      <div className="whole-eventscontainer">
        <div className="heading">
          <h3>{data[5].title}</h3>
          <p>
            {data[5].body1}
            <br />
            <br />
            {data[5].body2}
            <br />
            <br />
            {data[5].body3}
            <br />
            <br />
            {data[5].body4}
          </p>
          <h4>Register</h4>
        </div>
        <div className="vertical-line"></div>
        <div className="Design-img">
          <h1>{data[5].imgtitle}</h1>
          <img src={data[5].url} alt="" />
        </div>
      </div>
      FOOTER
    </>
  );
};
export default Events;
