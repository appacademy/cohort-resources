import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SessionContext } from './components/context/sessionContext';

const Root = () => {
  return(
  <BrowserRouter>
      <SessionContext.Provider value={{fruit: "banana", hello:"world"}}>
        <App />
      </SessionContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
