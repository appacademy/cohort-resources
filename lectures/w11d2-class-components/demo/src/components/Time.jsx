import React, { useState, useEffect } from "react";

const Time = () => {
  // fire off a request to a time API when component first loads
    // http://worldtimeapi.org/api/ip
  // store the time in a state variable
  // display the time
  const [time, setTime] = useState('now');

  useEffect(() => {
    console.log('hello world');
    // useEffect callback can only return undefined or a cleanup function
    const int = setInterval(() => console.log(Math.floor(Math.random()*100)), 1000);
    const fn = async () => {
      const res = await fetch('http://worldtimeapi.org/api/ip');
      if (res.ok) {
        const data = await res.json();
        setTime(data.datetime);
      }
    };
    fn();
    // if useEffect returns a function, it will be called when unmounting
    return () => {
      clearInterval(int);
      console.log('goodbye cruel world');
    };
  }, []);

  return (
    <h2>The time is now: {time}</h2>
  )
};

// class Time extends React.Component {
//   constructor(props) {
//     console.log('constructing...');
//     super(props);

//     this.state = {
//       time: 'now'
//     };
//   }

//   componentDidMount() {
//     console.log('hello world');
//     // useEffect callback can only return undefined or a function
//     const fn = async () => {
//       const res = await fetch('http://worldtimeapi.org/api/ip');
//       if (res.ok) {
//         const data = await res.json();
//         this.setState((state, props) => {
//           // console.log('state:', state);
//           // console.log('props:', props);
//           return { time: data.datetime };
//         });
//       }
//     };
//     fn();
//   }

//   componentDidUpdate(props, state) {
//     console.log('updated...');
//   }

//   componentWillUnmount() {
//     console.log('unmounting...')
//   }

//   render() {
//     console.log('rendering...');
//     return (
//       <h2>The time is now: {this.state.time}</h2>
//     )
//   }
// }

export default Time;