import { useState } from "react";
import Buttons from "./Buttons";

const Counter = props => {
  const [count, setCount] = useState(0);

  console.log('Counter', 'rendering...');
  return (
    <>
      <p>Current Count: {count}</p>
      <Buttons setCount={setCount} />
    </>
  )
}

export default Counter;