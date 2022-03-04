import React from "react";
import ReactDOM from "react-dom";
import App from "./app"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // get the element from the html with id of root

    const hello = <h1>Hello from React :O</h1>;
    //JSX syntax. syntactic sugar //JSX: JS XML

    // const hello = React.createElement('h1', null, ["Hello from React :)"]);
    //The first argument is the html tag, second are props, third is content

    // ReactDOM.render(hello, root);
    let name = "Mike"
    ReactDOM.render(<App name={name} nums={[1,2,3]}/>, root);
    //App is a react functional component. We render with carrots. 

    //first argument is what, second is where
});
