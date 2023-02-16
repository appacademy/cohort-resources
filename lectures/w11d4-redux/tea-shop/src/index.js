import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from "./store/index"
import {Provider} from 'react-redux'
import { receiveTea, receiveTeas, removeTea } from './store/teaReducer';

const initialState = {
  teas: {
    1:{
      id:1,
      flavor: "green",
      price: 3
    }
  }
}

const store = configureStore(initialState)

window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;

const Root = () => (
  <Provider store={store} >
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
