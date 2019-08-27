import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './widget';

// set up document-ready callback
document.addEventListener('DOMContentLoaded', () => {
  // grab root html element
  const root = document.getElementById('root');
  // replace root with React app via React DOM
  ReactDOM.render(<Widget />, root)
});