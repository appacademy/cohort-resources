import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.js'

const banana = document.getElementById('cheese')

ReactDOM.createRoot(banana).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App test='hello' otherTest='world' />
    </BrowserRouter>
  // </React.StrictMode>
)
