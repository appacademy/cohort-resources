import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const importantInfo = 'hi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App importantInfo={importantInfo} unimportantInfo='world' />
  </React.StrictMode>,
)
