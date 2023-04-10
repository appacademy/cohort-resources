import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const CountDisplay = props => {
  const [count, setCount] = useState({ num: 0 }); // only runs once
  console.log('rendering');
  const location = useLocation();

  // console.log(count);
  // setCount(count + 1); // update count to 1 BUT state setters are async
  // setCount(previous => previous + 1);
  // console.log(count);

  useEffect(() => {
    console.log('hello');
    const int = setInterval(() => console.log(new Date()), 1000);
    return () => {
      console.log('cleaning up');
      clearInterval(int);
    }
  }, []);

  useEffect(() => {
    console.log('updating');
  })

  useEffect(() => {
    console.log('location changed');
  }, [location]);

  const increment = () => {
    setCount(prev => ({ num: prev.num + 1 }));
  };

  const decrement = () => {
    setCount(prev => ({ num: prev.num - 1 }));
  };

  const reset = () => {
    setCount({ num: 0 });
  };

  const header = () => {
    return <h2>Count Display: {count.num}</h2>;
  };

  return (
    <>
      {location.pathname === '/count' && (
        <>
          {header()}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset!</button>
        </>
      )}
    </>
  );
};

export default CountDisplay;