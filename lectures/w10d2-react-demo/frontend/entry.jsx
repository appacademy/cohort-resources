import ReactDOM from 'react-dom';
import React from 'react';
import Widget from './widget';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root"); //grab the root html

  ReactDOM.render(<Widget />, root);
  // ReactDOM.render(<h1>We in entry file</h1>, root);
  // ReactDOM.render(React.createElement("h1", null, "We in entry file"), root);

})