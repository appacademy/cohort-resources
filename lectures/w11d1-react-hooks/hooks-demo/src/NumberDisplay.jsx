import { useState } from 'react';

function NumbersDisplay() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0)
  }

  return(
    <div className="counter">
      <h1>Current count: {count}</h1>
      <br />
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  )
  
}

export default NumbersDisplay;