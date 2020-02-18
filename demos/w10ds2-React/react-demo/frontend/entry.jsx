import React from 'react';
import ReactDom from 'react-dom';
import Widget from './widget';

document.addEventListener("DOMContentLoaded", () => {
  // debugger;
  const root = document.getElementById('root');
  ReactDom.render(<Widget />, root)
});