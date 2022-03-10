import React from 'react';
import { Provider } from 'react-redux';
import App from './app'

const Root = ({store}) => { // {store} pulls store out of props => props.store
    // debugger;
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

// const Root = () => (
//     <div>
//         <h1>Hey look! It's working!</h1>
//     </div>
// );

export default Root;