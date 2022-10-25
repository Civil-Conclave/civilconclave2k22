import React from "react";
import "./Event.css";
import img from "../../assets/g12.png";

function Event() {
  return (
    <div>
      <div className="event-namecontainer">
        <div className="event-name"> Case Study </div>
        <div className="event-name"> Guest Lecture </div>
        <div className="event-name"> Research Work Presentation </div>
        <div className="event-name"> Panal Discussion </div>
        <div className="event-name"> Seek the civil geek</div>
        <div className="event-name"> Design Different</div>
      </div>
      <div className="caseStudy">
        <div className="heading">
          <h3>COMMUNITY ENGAGEMENT, COLLABORATIVE LEARNING</h3>
          <p>
            The Case Study focuses on enhancing the help they need to build the
            skills necessary to develop and to launch innovative approaches to
            address the industry challenges.
            <br />
            <br />
            Through this event, we aim to give Teams working collaboratively to
            understand the role of research and ideation in solving real-life
            scenarios. We focus on providing unique points of view and context
            for understanding global problems and developing solutions at scale
            while gaining real-world experience.
            <br />
            <br />
            However, we also recognise the significance of learning that occurs
            outside of the formal classroom setting — learning that occurs
            within their cohort via institutional networks and through
            co-curricular experiences on the broader level.
          </p>
          <h4>REGISTER</h4>
        </div>
        <div className="vertical-line"></div>
        <div className="img">
          <h1>CASE STUDY</h1>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Event;
