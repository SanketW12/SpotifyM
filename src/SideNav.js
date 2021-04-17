import React from "react";

import "./css/sidenav.css";
import me from "./me.png";
import HeadsetIcon from "@material-ui/icons/Headset";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div>
        <div id="profile-wrapper">
          <img src={me} alt="" />
          <p style={{ color: "#E6E5F9" }}>Bob Smith</p>
        </div>
        <div id="navmenu-wrapper">
          <nav id="nav-menu">
            <div className="nav-item">
              <HeadsetIcon />

              <NavLink to="#">Discover </NavLink>
            </div>
            <div className="nav-item">
              <SearchIcon />
              <NavLink to="#">Search </NavLink>
            </div>
            <div className="nav-item">
              <FavoriteIcon />
              <NavLink to="#">Favourites</NavLink>
            </div>
            <div className="nav-item">
              <PlayCircleFilledIcon />
              <NavLink to="#">Playlists</NavLink>
            </div>
            <div className="nav-item">
              <PlaylistPlayIcon />
              <NavLink to="#">Charts</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
