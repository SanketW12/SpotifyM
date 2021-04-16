import React from "react";
import SideNav from "./SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./Topbar";
import Content from "./Content";
import Player from "./Player";
function App() {
  return (
    <>
      <div id="main-wrapper">
        <div id="sidenav-wrapper">
          <SideNav></SideNav>
        </div>
        <div id="content-wrapper">
          <Topbar></Topbar>
          <Content></Content>
          {/* <Player></Player> */}
        </div>
      </div>
    </>
  );
}

export default App;
