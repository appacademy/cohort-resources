import React from "react";
import ReactDOMClient from "react-dom/client";

import Root from "./components/root";
import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveTea } from './actions/tea_actions';
import { fetchAllTeas, createTea } from './actions/tea_actions';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.");

  const store = configureStore();
  
  // testing start
  window.store = store;
  window.receiveTea = receiveTea;
  window.fetchAllTeas = fetchAllTeas;
  window.createTea = createTea;
  // testing end

  const rootEle = document.getElementById("root");
  const root = ReactDOMClient.createRoot(rootEle);
  root.render(<Root store={store}/>)
})