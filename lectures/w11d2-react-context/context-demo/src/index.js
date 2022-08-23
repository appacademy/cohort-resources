import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './context/sessionContext';

// start testing
import { fetchPosts } from './util/fetchPosts';
import { SessionContext } from './context/sessionContext';
window.fetchPosts = fetchPosts;
// end testing

const Root = () => (
  <BrowserRouter>
    <SessionProvider>
      <App />
    </SessionProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
