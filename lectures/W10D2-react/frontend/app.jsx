import React from 'react';
import DogIndex from './dog_index'

const App = (props) => {
    // console.log(props)
    return (
        <div className="app">
            <h1>Hello, {props.name} from the APP!</h1>
            <DogIndex/>
            {/* <ComponentOne name={ props.name}/>
            <ComponentTwo/> */}
        </div>
    )
}


// const App = ({name,otherProp}) => {
   
//     return <h1>Hello, {name} from the APP!</h1>
// }
export default App;