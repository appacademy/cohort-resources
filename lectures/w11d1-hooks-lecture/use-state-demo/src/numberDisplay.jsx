import {useState} from "react";
import Buttons from "./buttons";

function NumberDisplay() {

    const [count, setCount] = useState(0); 
    const [countTwo, setCountTwo] = useState(0)
    const [arr, setArr] = useState([])

    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1)
    }
    
    const reset = ()=>{
        setCount(0 )
    }

    const updateArray = ()=>{
        // arr.push("a");
        // [...arr]
        let newArray = [...arr]
        newArray.push("a")
        setArr(newArray)
    }

    return (
        <>
        <h1>{count}</h1>
        <h2>{countTwo}</h2>
        <button onClick={updateArray}>push</button>
        {console.log(arr)}
        <Buttons increment={increment} decrement={decrement} reset={reset}/>
            
        </>
    )
}

export default NumberDisplay
