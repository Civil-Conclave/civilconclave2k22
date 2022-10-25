import React from "react";
import "./Heading.css";

function Heading(props) {
  console.log(props);
  return (
    <div className="headingWrapper">
      <h1 className="headingName" style={{ color: "#1F789F" }}>
        {props.name}
      </h1>
    </div>
  );
}

export default Heading;
