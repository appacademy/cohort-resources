import { useState } from "react";

function NumbersDisplay(){
    // useState hook
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count + 1)
    }    
    
    const decrement = () => {
        setCount(count - 1)
    }    
    const reset = () => {
        setCount(0)
    }

    return(
        <>
            <h1>Current Count: {count} </h1>
            <button onClick={increment}>+</button><br />
            <button onClick={decrement}>-</button><br />
            <button onClick={reset}>reset</button><br />
        </>
    )
}

export default NumbersDisplay;