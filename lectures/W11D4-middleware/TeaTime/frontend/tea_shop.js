import configureStore from "./store/store"
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import * as ApiUtil from './util/tea_api_util';


document.addEventListener("DOMContentLoaded", () => {
  
  console.log("welcome to the tea shop");
  const root = document.getElementById("root")
  const store = configureStore();
  ReactDOM.render(<Root store={store} />,root)

  //testing
  window.store = store
  window.getTeas = ApiUtil.getTeas;
  window.postTea = ApiUtil.postTea;
});