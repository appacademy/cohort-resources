import {useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0);


    // possible to have many slices of state
    // const [color, setColor] = useState("blue")


    const increment = ()=>{
        setCount(count + 1);
        // whatever it was before plus one!
    }

    const reset = ()=>{
        setCount(0);
    }
    
    const decrement = ()=>{
        setCount(count - 1);
    }


    return (
        <>
        {/* <h2>{color}</h2> */}
            <h1>Current Count: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset!</button>
            <button onClick={increment}  >+</button>
            
        </>
    )
}
