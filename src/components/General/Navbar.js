import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/g12.png";
import { VscMenu } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import logo2 from "../../assets/logo2.png";
import logo1 from "../../assets/logo1.png";

function Navbarnew() {
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
              <a
                href="https://docs.google.com/document/d/1lZKT-0peBlpXkNjfeEI9zA8gq4jVOcUtZvw9E4SfXo8/edit"
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
            <VscMenu
              className="mob-icon"
              style={{ display: burgerstate ? "block" : "none" }}
              onClick={showham}
            />
            <ImCross
              className="mob-icon"
              style={{ display: burgerstate ? "none" : "block" }}
              onClick={showham}
            />
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
                  className={
                    activeMenu === "aboutus" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("aboutus");
                  }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1lZKT-0peBlpXkNjfeEI9zA8gq4jVOcUtZvw9E4SfXo8/edit"
                  target="_blank"
                  className={
                    activeMenu === "register" ? "active-links" : "links"
                  }
                  onClick={() => {
                    setActiveMenu("register");
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
      )}
    </>
  );
}

export default Navbarnew;
