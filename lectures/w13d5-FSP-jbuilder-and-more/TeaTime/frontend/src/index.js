import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { receiveTea, receiveTeas, removeTea, fetchTea, fetchTeas, postTea } from './store/teaReducer';

const initialState = {
  teas: {
    1: {
      id: 1,
      flavor: 'green',
      price: 5.33
    }
  }
};

const store = configureStore(initialState);

//testing
window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.fetchTea = fetchTea;
window.fetchTeas = fetchTeas;
window.postTea = postTea;
//

const Root = () => ( // note the implicit return
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // The provider allows every child component access to the store
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
