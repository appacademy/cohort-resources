import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = (props) => {
    // sole purpose of our root component is to wrap our whole app with the Provider
    // Our App will hold our component hierarchy
    return(
        <Provider store={props.store}>
            <App />
        </Provider>
    )
}

export default Root;