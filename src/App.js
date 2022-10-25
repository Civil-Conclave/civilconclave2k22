import "./App.css";
import React, { useState, useRef, useLayoutEffect } from "react";
import Home from "./components/Home/index.js";
import Footer from "./components/General/Footer.js";
import Events from "./components/Events/index.js";
import AboutUs from "./components/AboutUs/index.js";
import Navbarnew from "./components/General/Navbar.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="finalWrapper">
        <Navbarnew></Navbarnew>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
