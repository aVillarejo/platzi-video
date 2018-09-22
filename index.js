import React from "react";
import ReactDOM from "react-dom";
import Home from "./src/pages/containers/home";
import data from "./src/api.json";

const app = document.getElementById("app");
ReactDOM.render(<Home data={data}/>, app);
