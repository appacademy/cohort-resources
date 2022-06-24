import React from "react";
import DogIndex from "./DogIndex";

const App = (props) => {
    return (
        <div className="app">
            <h1>Hello to {props.stoods} from the App</h1>
            <h2>Popular Dogs:</h2>
            <DogIndex />
        </div>
    )
}

//App is the parent of DogIndex and DogIndex is the parent of DogDetail

export default App;