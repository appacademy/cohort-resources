import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { SessionProvider, SessionContext } from './contexts/sessionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  // </React.StrictMode>,
)
