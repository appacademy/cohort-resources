import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

// takes virtual dom react app and converts into 
// actual DOM elements inside <div id='root'></div>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App name="Michael"/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
