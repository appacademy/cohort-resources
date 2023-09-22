import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const tas = ["Mike", "Abbey", "Paulo"]
const podLeader = "Mike"

const Root = () => {
  return(
    <BrowserRouter>
      <App tas={tas} podLeader={podLeader}/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
