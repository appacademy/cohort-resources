import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const mike = "Mike"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App name={mike} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
