import React from "react";
import { Provider } from "react-redux";
import App from "./app";

const Root = ({store}) => {
    return(
        <Provider store={store} >
            <h1>The root component is working!</h1>
            <App />
        </Provider>
    )
}

export default Root;