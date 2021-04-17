import React from "react";
import Axios from "axios";
import Spotify from "spotify-web-api-js";
import Section from "./section";

var s = new Spotify();

export default function Content() {
  var redirect_uri = "http://localhost:3000/"; // change this your value

  var client_id = "9803196ab4824596ad47fade7ab69a7d";
  var client_secret = "b6e3d7fd4c8d4149932f58eb5346321c";
  const AUTHORIZE = "https://accounts.spotify.com/authorize";

  function requestAuthorization() {
    console.log("called");
    localStorage.setItem("client_id", client_id);
    localStorage.setItem("client_secret", client_secret); // In a real app you should not expose your client_secret to the user

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url +=
      "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
  }

  async function getapi() {
    const dataJ = await Axios.get(
      `https://api.spotify.com/v1/browse/new-releases?country=india&limit=10&offset=4" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQA6yz4X97DtOVZw30ubIzLd-Zu16Alg6BJ-O3tlk87eBBk3uhGm6QZ7X9UUmfstoQ1GZnvpxLSq2MjhBefPJjXUlglk-tQRX-UlD8b94TQzkM0C2fucs6bnopsEom6K2KgYVC2y4EBGeSW1yWJhWmtcFj50BcTG-Ec`
    );

    console.log(dataJ);
  }

  const handleLogin = () => {
    window.location = `${AUTHORIZE}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", overflow: "clip" }}
      >
        <Section title="RELEASED THIS WEEK"></Section>
        <Section title="FEATURED PLAYLISTS"></Section>
        <Section title="BROWSE"></Section>

        {/* <button onClick={handleLogin}>authenticate</button> */}
      </div>
    </>
  );
}

//   AQAB4jx2kUKWh0jsa3HWeNkcqUv-5MJNb49VZtINX9bWrfUKil0HNGs3W9vO1RI4eltY1aPtU0WVNu7mi2vnjk6WZ8LFGa7K4vr95SQIVYvt2zOICjBlfJ8CYXqDwdKHJX9KrBGyvjsdlEwu39mPS75ILT51hZAsX2bySlV1RFBXq-D_U2zXL2t6qYGuT_4l8moPYJ-sES-IidW9Ao8nySpG-60gE6u1JxL0De1XMCcaclXLSNxlENauFCquLEMYddjfhz_rOc1aQt4O9-UNz1coI-Il37L9DBS3C66cJXF6IvtE8zRvj-MJDWd2rIaNJUj_AJzgQ8rppX-NGFFHUd7dBtB8-x8qn5M8goLFJGsx9qSGW62RnMRbolX0dYc8h6DHccdhSmI3WXTV7gOinQ38wN4qmsgRhzfnzSASIXkP
