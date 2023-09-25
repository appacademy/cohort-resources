import { useState, useRef } from "react";

function NumbersDisplay () {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(0);

  const increment = () => {
    setCount(count + 1); // this triggers a rerender of the component
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const startTimer = () => {
    let timer = 0
    const intervalId = setInterval(() => {
      console.log(timer++);
    }, 1000);
    intervalRef.current = intervalId;
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  }

  console.log('rerendering')

  return (
    <>
      <h2>Current Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset!</button>
      <button onClick={startTimer}>start timer</button>
      <button onClick={stopTimer}>stop timer</button>
    </>
  )
}

export default NumbersDisplay;