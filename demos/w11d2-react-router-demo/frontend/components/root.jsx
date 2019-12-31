import React from 'react';
import { Provider } from 'react-redux';
// importing HashRouter
import { HashRouter} from 'react-router-dom';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    
    {/* 
      HashRouter wraps our entire App, giving access to Routes in
      all of our app's components/

      NOTE: HashRouter should always be placed INSIDE Provider to
      ensure HashRouter also has access to the store
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
