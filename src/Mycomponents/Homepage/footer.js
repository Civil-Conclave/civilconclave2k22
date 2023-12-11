import React from "react";
import "./footer.css";
import img from "../../images/footer-cc-logo.svg";
import imgfb from "../../images/FB-LOGO-footer.svg";
import imginsta from "../../images/insta-logo-footer.svg";
import imglinkedin from "../../images/linkedin-logo-footer.svg";

export default function Footer() {
  return (
    <>
    <div className="footer-div">
      <div className="logo-footer-div">
        <img className="footer-logo" src={img} />
      </div>
      <div className="contact-visit">
      <div className="contacts-footer-div">
        <h1>CONTACTS</h1>

        <p>
          Civil Engineering Department Indian Institute of Technology, Roorkee
        </p>
        <h2>http://civil.iitr.ac.in</h2>
      </div>
      <div className="visit-footer-div">
        <h1>VISIT</h1>
        <a className="footer-links" href="/">Home</a>
        <a className="footer-links" href="/">Events</a>
        <a className="footer-links" href="/">About Us</a>
        <a className="footer-links" href="/">Registration</a>

      </div></div>
      <div className="mailus-footer-div">
      <img className="footer-logo-cc" src={img} />
<div className="mail-us-footer-child">
        <h1>MAIL US</h1>
        <p> civilconclave@iitr.ac.in</p></div>
      </div>
      <div className="follow-us-footer-div">
        <h1>FOLLOW US ON</h1>
        <div className="social-media-logo-div-footer">
          <img className="social-media-logo" src={imgfb}></img>
          <img className="social-media-logo" src={imginsta}></img>
          <img className="social-media-logo" src={imglinkedin}></img>
        </div>
      </div>
     
    </div> <div className="end-line"></div></>
  );
}
