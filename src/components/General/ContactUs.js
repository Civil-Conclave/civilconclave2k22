import React, { useRef } from "react";
import emailjs from "emailjs-com";
import map from "../../assets/Rectangle 447.png";
import "./ContactUs.css";
// https://drive.google.com/file/d/1g2Y6g8-0w4PDJtfZmcst3P8yyV2Vwp0v/view?usp=drive_link
// https://drive.google.com/file/d/1Vg0ee8GCmBq-cWOZIRPUIp2zMaZSpAXC/view?usp=drive_link
// https://drive.google.com/file/d/1Z4AJG3qBc-vFTxQ4hh2bNWye64_pGFDT/view?usp=sharing
export default function Lastcomponent() {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm("gmail", "template_xicusq9", e.target, "kv-dKbu7WIPGeDrFH")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="main-container">
        <div className="main">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input1">
              <div className="input">
                <p className="inputStyle">Full Name</p>
                <input type="text" name="from_name" className="name-input" />
              </div>
              <div className="input">
                <p className="inputStyle">Email ID</p>
                <input type="email" name="from_email" className="email-input" />
              </div>
            </div>
            <div className="input2">
              <p className="inputStyle">Your Message</p>
              <input type="Message" className="message-input" name="message" />
            </div>
            <div className="btn">
              <button id="msg" type="submit" value="Send" >
                <a href='mailto:civilconclave@iitr.ac.in'>
                SEND MESSAGE
                </a>
              </button>
            </div>
          </form>
        </div>

        <div className="mapImage">
          <img src={map} id="map"></img>
        </div>
      </div>
    </>
  );
}
