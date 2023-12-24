// import Hamburger from 'hamburger-react'


import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/g12.png";
import { VscMenu } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import logo2 from "../../assets/logo2.png";
import logo1 from "../../assets/logo1.png";

function Navbarnew() {

  // const [isOpen, setOpen] = useState(false)


  const [activeMenu, setActiveMenu] = useState("");
  const [burgerstate, setBurgerState] = useState(true);
  const [ham, setHam] = useState(false);
  const showham = () => {
    setHam(!ham);
    setBurgerState(!burgerstate);
  };
  return (
    <>
      <div className="navbarWrapper">
        <div className="logos">
          <div className="logo1">
            <img src={logo1} id="img1" />
          </div>
          <div className="logo2">
            <img src={logo2} id="img2" />
          </div>
        </div>
        <div className="nav-links">
          <ul className="pageNames">
            <li>
              <Link
                to="/"
                className={activeMenu === "Home" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("Home");
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={activeMenu === "events" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("events");
                }}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={activeMenu === "aboutus" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("aboutus");
                }}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/sponsor"
                className={activeMenu === "sponsor" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("sponsor");
                }}
              >
                SPONSORS
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1AYeE72HbkTBC8EF8A5puFZW0MNfc1094/view?usp=sharing"
                target="_blank"
                className={activeMenu === "register" ? "active-links" : "links"}
                onClick={() => {
                  setActiveMenu("register");
                }}
              >
                REGISTER
              </a>
            </li>
          </ul>
          <div className="mobile">
            {ham ? (
              <ImCross className="mob-icon" onClick={showham} />
            ) : (
              <VscMenu className="mob-icon" onClick={showham} />
            )}

{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

          </div>
        </div>
      </div>

      {ham ? (
        <>
          <div className="ham">
            <ul className="nav-i">
              <li>
                <Link
                  to="/"
                  className={activeMenu === "Home" ? "active-links" : "links"}
                  onClick={() => {
                    setActiveMenu("Home");
                    setHam(false);
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={activeMenu === "events" ? "active-links" : "links"}
                  onClick={() => {
                    setActiveMenu("events");
                    setHam(false);
                  }}
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={
                    activeMenu === "aboutus" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("aboutus");
                    setHam(false);
                  }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsor"
                  className={
                    activeMenu === "sponsor" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("sponsor");
                    setHam(false);
                  }}
                >
                  SPONSOR
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1AYeE72HbkTBC8EF8A5puFZW0MNfc1094/view?usp=sharing"
                  target="blank"
                  className={
                    activeMenu === "register" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("register");
                    setHam(false);
                  }}
                >
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </>
       ) : (
        " "
       )
       
       }
    </>
  );
}

export default Navbarnew;
