import React from "react";
import map from "../../assets/map.png";
import "./ContactUs.css";

export default function Lastcomponent() {
  return (
    <>
      <form>
        <div className="main-container">
          <div className="main">
            <div className="input1">
              <div className="input">
                <p className="inputStyle">Full Name</p>
                <textarea type="text" name="fullname" className="name-input" />
              </div>
              <div className="input">
                <p className="inputStyle">Email ID</p>
                <textarea type="email" name="email" className="email-input" />
              </div>
            </div>
            <div className="input2">
              <p className="inputStyle">Type your message here...</p>
              <textarea type="longtext" className="message-input" name="msg" />
            </div>
            <div className="btn">
              <button id="msg">SEND MESSAGE</button>
            </div>
          </div>

          <div className="mapImage">
            <img src={map} id="map"></img>
          </div>
        </div>
      </form>
    </>
  );
}
