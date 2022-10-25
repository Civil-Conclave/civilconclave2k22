import React from "react";
import Event from "./Event.js";
import Scroller from "./Scroller.js";
import HeaderEvents from "./HeaderEvents.js";
import EventsAll from "./EventsAll.jsx";

function Events() {
  return (
    <div className="eventsWrapper">
      <HeaderEvents></HeaderEvents>
      <EventsAll></EventsAll>
      {/* <Scroller></Scroller> */}
    </div>
  );
}

export default Events;
