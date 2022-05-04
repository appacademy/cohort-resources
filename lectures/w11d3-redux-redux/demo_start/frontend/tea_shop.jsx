import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveGreenTea, receiveTea } from './actions/tea_actions';
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,root)
  window.store = store
  window.receiveTea = receiveTea


})