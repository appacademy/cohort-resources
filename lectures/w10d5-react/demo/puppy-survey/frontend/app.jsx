import React from "react";
import DogIndex from "./dog_index"; //be careful with auto imports

const App = (props) => { // {name, nums} if desired
    //we passed props (properties) to our component
    
    return (
        <div className="app"> 
            <h1>Hello {props.name} from App :D, 
                here are some nums: {props.nums}
            </h1>
            <DogIndex />
        </div>
    )
    //JSX no ticks `` :)
    // Use className (JSX)
}

export default App;

//we did it
// the child should not modify props.
// they are information to pass down, not up.