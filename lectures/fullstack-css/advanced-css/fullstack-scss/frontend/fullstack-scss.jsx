import React from "react";
import ReactDOM from "react-dom";
import icons from "./library/library"; 
import App from "./components/app";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});