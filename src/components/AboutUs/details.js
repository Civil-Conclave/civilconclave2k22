import React from "react";
import "./details.css";

function Details(props) {
  return (
    <div className="Card">
      <div className="CardHeader"></div>
      <div className="cardImages">
      <img className="Dp" src={props.img}></img>
      </div>
      <div className="Name">{props.name}</div>
      <div className="Position">{props.position}</div>
    </div>
  );
}
export default Details;
