import React from "react";
import Scroller from "./Scroller.js";
import EventsAll from "./EventsAll.jsx";
import Navbarnew from "../General/Navbar";

function Events(props) {
  return (
      <>
        <Navbarnew></Navbarnew>
      <EventsAll></EventsAll>
    </>
  );
}

export default Events;
