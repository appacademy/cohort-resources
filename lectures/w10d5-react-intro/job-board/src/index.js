import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app';

const user = {
  name: 'Darren',
  age: '87',
  height: 77
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App user={user} name="banana" color="cheese"/>
    </BrowserRouter>
  </React.StrictMode>
);
