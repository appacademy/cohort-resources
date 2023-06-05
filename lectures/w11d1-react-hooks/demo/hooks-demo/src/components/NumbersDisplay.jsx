import {useState} from "react"

const NumbersDisplay = () => {

    const [count, setCount] = useState(0)
    
    // const func = () => {
    //     // no const [count, setCount] = useState(0) here or inside of loops
    // }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const callback = () =>{
        theSetter(100)
        console.log("this the log")
        console.log("this the log")
        console.log("this the log")
        console.log("this the log")
        console.log("this the log")

    }

    const theSetter = (num) => {
        setCount(num)  
    }



    return (

        <>
            <h1>The current count is: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <br />
            <button onClick={() => theSetter(20)}>THE SET</button>
            {/* <button onClick={callback}>THE SET</button> */}
            {/* <button onClick={theSetter(20)}>SET</button>  */}{/* we don't do that here  */}
            

        </>
    )
}



export default NumbersDisplay;