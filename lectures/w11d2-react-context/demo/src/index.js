import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SessionContext.Provider value={{fruit: "banana"}}> */}
      <SessionProvider>
        <App />
      </SessionProvider>
      {/* </SessionContext.Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
