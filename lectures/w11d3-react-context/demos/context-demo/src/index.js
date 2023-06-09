import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './components/context/sessionContext';

const Root = () => {
  return(
  <BrowserRouter>
      <SessionProvider children={App} />
        {/* <App /> */}
      {/* </SessionProvider> */}
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
