import React from "react";
import ReactDOM from "react-dom";
import Home from "./src/pages/containers/home";
import data from "./src/api.json";
import { createStore } from "redux";

const initialState = {
  data: { ...data }
};

/*store de redux*/
const store = createStore(
  state => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const app = document.getElementById("home-container");
ReactDOM.render(<Home data={data} />, app);
