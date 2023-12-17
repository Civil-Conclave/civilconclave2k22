import React from "react";
import Logo from "../../assets/footerconclavelogo.png";
import Insta from "../../assets/Insta.png";
import fb from "../../assets/fb.png";
import linked from "../../assets/linked.png";
import "./Footer.css";
function footer() {
  return (
    <div className="Container">
      <div className="MainFooter">
        <div className="smalldiv">
          <img src={Logo} className="logo" />
        </div>
        <div className="smalldiv">
          <div className="FHeading">CONTACTS</div>
          <div className="Ftext">
            Civil Engineering Department, Indian Institute of Technology,
            Roorkee
          </div>
          <div className="Ftext bold">https://civil.iitr.ac.in</div>
        </div>
        <div className="smalldiv visit">
          <div className="FHeading">VISIT</div>
          <div className="Ftext">Home</div>
          <div className="Ftext">Events</div>
          <div className="Ftext">About Us</div>
          <div className="Ftext">Register</div>
        </div>
        <div className="smalldiv mail">
          <div className="FHeading">MAIL US</div>
          <div className="Ftext">civilconclave@iitr.ac.in</div>
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
                  href="https://www.facebook.com/civilconclave.iitr/0"
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
