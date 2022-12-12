import {useState, useEffect} from "react";


function NumbersDisplay(props){
  const[count, setCount] = useState(0);
  // let counter = 0;


  //runs only after first render
  // useEffect(()=>{
  //   setCount(5);
  //   console.log('inside the useEffect')
  // }, [])

  //runs after every render.  Watch out for infinite loop when setting the state
  // useEffect(()=>{
  //   setCount(5);
  //   console.log('inside the useEffect')
  // })

  //runs when ever the dependent variable changes
  //  useEffect(()=>{
  //   console.log(count)
  //   console.log('inside the useEffect')
  // }, [count])

  // console.log('after the useEffect')
  
  const increment = () => {
    setCount(count + 1);
    // counter += 1;
    // console.log(counter)
  }

  const decrement = () => {
    setCount(count - 1);
    // counter -= 1
    // console.log(counter)

  }

  const reset = () => {
    setCount(0);
    // counter = 0;
    // console.log(counter)

  }

  return(
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>

    </>
  )

}

export default NumbersDisplay;