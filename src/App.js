import "./App.css";
import "./loader.css"
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
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home/index.js")), 400);
  });
});
const Events = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Events/index.js")), 400);
  });
});
const AboutUs = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/AboutUs/index.js")), 400);
  });
});
const CaseStudy = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/CaseStudy/index.js")), 400);
  });
});
// const Sponsornav= lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/Sponsorsnav/index.js")), 400);
//   });
// });

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loaderbody"><div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <div className="loadtext">
          Loading
        </div>
      </div>}>
        <div className="finalWrapper">
          {/*<Navbarnew></Navbarnew>*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            {/* <Route path="/sponsor" element={<Sponsornav />} /> */}
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
