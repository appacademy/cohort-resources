import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const greeting = <h1>Hello There</h1>;
    const name = "EFRM"

    ReactDOM.render(<App name={name}/>, root); //I leave space for props
    // two args: what to render, and where. the first arg will replace the content of second arg

})