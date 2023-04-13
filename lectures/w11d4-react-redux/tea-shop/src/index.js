import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {Provider} from 'react-redux';
import {receiveTea, receiveTeas, removeTea} from './store/teaReducer'


const initialState = {
  teas: {
    1 : {
      id: 1, flavor: 'green', price: 5.33
    }
  }
}

const store = configureStore(initialState);




//testing

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
    flavor: 'Chai tea',
    price: 4
  },
  5: {
    id: 5,
    flavor: 'sencha',
    price: 6

  }
}




window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.teas = teas;
window.blackTea = blackTea;
window.passionTea = passionTea;


//testing

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
