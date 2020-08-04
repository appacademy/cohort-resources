import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root'); // grabbing div with id root
  ReactDOM.render(<Widget />, root);
})