import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveTea } from './actions/tea_actions';


document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.");

  const store = configureStore();
  
  // Testing
  window.store = store;
  window.receiveTea = receiveTea;
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,root);
})