import React from "react";
import { Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route
              component={() => {
                return (
                  <>
                    <Content></Content>
                  </>
                );
              }}
            ></Route>

            <Content></Content>
            {/* <Player></Player> */}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
