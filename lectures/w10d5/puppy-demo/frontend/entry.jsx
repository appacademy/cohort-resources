import React from "react";
import ReactDOM from "react-dom";
import App from "./app"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const hello = <h1>Hello from React!</h1>;

    ReactDOM.render(<App stoods="Peter, Wendy, and Charlie" />, root);  // two args: WHAT, and WHERE
    // All components must be capitalized. React Component vs HTML
    
})