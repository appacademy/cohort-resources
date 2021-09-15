import configureStore from "./store/store"
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root"



document.addEventListener("DOMContentLoaded", () => {
  
  const root = document.getElementById("root")

  const preLoadedState = {
    teas: {
      1: {
        flavor: "Green",
        amount: 5.99,
        id:1
      },
      2: {
        flavor: "Black",
        amount: 10.99,
        id:2
      }
    }
  }

  const store = configureStore(preLoadedState);
  window.store = store
  // console.log("welcome to the tea shop")
  ReactDOM.render(<Root store={store} />,root)
  
})

















 









