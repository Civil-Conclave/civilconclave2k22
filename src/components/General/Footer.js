import React from "react";
import Logo from "../../assets/footerconclavelogo.png";
import Insta from "../../assets/Insta.png";
import fb from "../../assets/fb.png";
import linked from "../../assets/linked.png";
import "./Footer.css";
import { Link } from "react-router-dom"

function footer() {
  return (
    <div className="Container">
      <div className="MainFooter">
        <div className="smalldiv1">
          <img src={Logo} className="logo" />
        </div>
        <div className="smalldiv">
          <div className="FHeading">CONTACTS</div>
          <div className="Ftext">
            Civil Engineering Department, Indian Institute of Technology,
            Roorkee
          </div>
          <a className="Ftext bold" href='https://civil.iitr.ac.in' target= "_blank">https://civil.iitr.ac.in</a>
        </div>
        <div className="smalldiv visit">
          <div className="FHeading">VISIT</div>
          <Link className="Ftext" to = "/">Home</Link>
          <Link className="Ftext" to = "/events">Events</Link>
          <Link className="Ftext" to = "/aboutus">About Us</Link>
          <Link className="Ftext" to  = "/Register">Register</Link>
        </div>
        <div className="smalldiv mail">
          <div className="FHeading">MAIL US</div>
          <a href= 'mailto:civilconclave@iitr.ac.in' className="Ftext" target='_blank' >civilconclave@iitr.ac.in</a>
        </div>
        <div className="smalldiv fu">
          <div className="FHeading fu">FOLLOW US</div>
          <div>
            <div className="image">
              <div className="imgBox">
                <a
                  href="https://www.instagram.com/civil_conclave/"
                  target="_blank"
                >
                  <img src={Insta} className="logo" />
                </a>
              </div>
              <div className="imgBox">
                <a
                  href="https://www.facebook.com/civilconclave.iitr/"
                  target="_blank"
                >
                  <img src={fb} className="logo" />
                </a>
              </div>
              <div className="imgBox">
                <a
                  href="https://www.linkedin.com/company/civil-conclave-iitroorkee/?original_referer=https%3A%2F%2Fcivilconclave.iitr.ac.in%2F"
                  target="_blank"
                >
                  <img src={linked} className="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bluecolor"></div>
    </div>
  );
}
export default footer;
