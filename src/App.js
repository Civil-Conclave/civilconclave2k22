import "./App.css";
import React, { Suspense, lazy } from "react";
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
const Home = lazy(() => import("./components/Home/index.js"));
const Events = lazy(() => import("./components/Events/index.js"));
const AboutUs = lazy(() => import("./components/AboutUs/index.js"));
const CaseStudy = lazy(() => import("./components/CaseStudy/index.js"));
const Sponsornav= lazy(()=> import("./components/Sponsorsnav/index.js"))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="finalWrapper">
          <Navbarnew></Navbarnew>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/sponsor" element={<Sponsornav />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
