import React from "react";
import Card from "./card";
import data from "./data";
import "./css/section.css";

export default function Section(prop) {
  return (
    <>
      <div id="section-wrapper">
        <div className="divider">
          <div className="divider-text">{prop.title}</div>
          <div className="divider-line"></div>
        </div>
        <div
          style={{ display: "flex", overflowX: "inherit", overflowY: "hidden" }}
        >
          {data.map((value) => {
            return <Card name={value.name} img={value.img}></Card>;
          })}
        </div>
      </div>
    </>
  );
}
