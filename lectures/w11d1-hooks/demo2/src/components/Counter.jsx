import { useEffect, useState } from 'react';
import './Counter.css';
import { Link } from 'react-router-dom';

const Counter = props => {
  console.log('rendering...');
  const [count, setCount] = useState(0);

  const increment = e => {
    // setCount(count + 1);
    setCount(old => old + 1); // good practice to pass in a callback whenever the new value is dependent on the old
  };

  const decrement = e => {
    setCount(old => old - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => console.log(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>The current count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Link to={'/jobs'}>Home</Link>
    </div>
  );
};

export default Counter;