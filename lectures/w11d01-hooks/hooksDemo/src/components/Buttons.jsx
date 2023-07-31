const Buttons = ({ setCount }) => {
  const increment = () => {
    // two possible ways to invoke state setter
    // first, simply pass in the new value
    // setCount(count + 1)
    // second, alternatively pass in an updating callback
    // used whenever the new value is dependent on the old
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  console.log('Buttons', 'rendering...');
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default Buttons;