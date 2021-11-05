import React from "react"
import DogIndex from "./dogIndex";

//functional component:
const App = (props) => {
    return (
        <div className="app"> 
            <h1>React Greeting, Welcome to The Best Survey,</h1>
            <DogIndex />
            {/* <h2>{props.name}</h2> */}
        </div>
    )
}

export default App;
