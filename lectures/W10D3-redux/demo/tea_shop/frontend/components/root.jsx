import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = (props) => {

    // Provider provides the store to your App. (all of your components)
    return (
        <Provider store={props.store}> 
            <App />
        </Provider>
    );
}

export default Root;