import React from "react";
import "./css/card.css";

export default function Card(prop) {
  return (
    <>
      <div id="card-wrapper">
        <img src={prop.img} alt="" />
        <h6>{prop.name}</h6>
      </div>
    </>
  );
}
