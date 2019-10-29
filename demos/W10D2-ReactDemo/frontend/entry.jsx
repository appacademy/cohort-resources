import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../frontend/widget';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Widget />, root);
})