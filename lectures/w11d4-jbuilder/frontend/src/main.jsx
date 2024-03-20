import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureStore from './store/index.js'
import { Provider } from 'react-redux';
import { receive_tea, receive_teas, removeTea } from './store/teaReducer.js'

const initialState = {
  teas: {
    1: {
      id: 1,
      flavor: "oolong",
      price: 6.00 
    }
  }
};


const blackTea = {
  id: 2,
  flavor: 'black tea',
  price: 3.5
}    

const passionTea = {
  id: 3,
  flavor: 'passion tea',
  price: 4
  
}

const teas = { 
4: { 
  id: 4, 
  flavor: 'Chai', 
  price: 4.32
}, 
5: { 
  id: 5, 
  flavor: 'Rooibos', 
  price: 5.25
}
}


const store = configureStore(initialState);
window.store = store;
window.receive_tea = receive_tea;
window.receive_teas = receive_teas;
window.removeTea = removeTea;
window.blackTea = blackTea;
window.passionTea = passionTea;
window.teas = teas;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
)

