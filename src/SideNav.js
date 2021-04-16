import React from "react";

import "./css/sidenav.css";
import me from "./me.png";
import HeadsetIcon from "@material-ui/icons/Headset";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

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
              <a href="#">Discover</a>
            </div>
            <div className="nav-item">
              <SearchIcon />
              <a href="#">Search</a>
            </div>
            <div className="nav-item">
              <FavoriteIcon />
              <a href="#">Favourites</a>
            </div>
            <div className="nav-item">
              <PlayCircleFilledIcon />
              <a href="#">Playlists</a>
            </div>
            <div className="nav-item">
              <PlaylistPlayIcon />
              <a href="#">Charts</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
