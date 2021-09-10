import React from "react";
import ReactDOM from "react-dom";

import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const welcomeMessage = <h1>Hello World</h1>;
    ReactDOM.render(<App/> ,root)
})