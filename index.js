import React from "react";
import ReactDOM from "react-dom";
import Playlist from "./src/playlist/components/playlist";
import data from "./src/api.json"

const app = document.getElementById("app");

ReactDOM.render(<Playlist title="Destacados" data={data}/>,app);
