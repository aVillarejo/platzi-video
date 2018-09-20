import React from "react";
import ReactDOM from "react-dom";
import Media from "./src/playlist/components/media";

const app = document.getElementById("app");

ReactDOM.render(
  <Media
    title="Bitcoins"
    author="Alberto Villarejo"
    image="./images/covers/bitcoin.jpg"
    type="video"
  />,
  app
);
