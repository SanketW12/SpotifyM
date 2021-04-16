import React from "react";
import "./css/player.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

export default function Player() {
  return (
    <>
      <div id="player-wrapper">
        <div id="player-button">
          <PlayCircleFilledWhiteIcon />
        </div>
        <div id="track"></div>
      </div>
    </>
  );
}
