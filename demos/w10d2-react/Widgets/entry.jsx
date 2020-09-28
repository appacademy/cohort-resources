import ReactDOM from 'react-dom';
import React from 'react';
import Widget from './widget'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Widget/>, root)
    // ReactDOM.render(React.createElement("h1", null, "We are in the entry file"), root)
})