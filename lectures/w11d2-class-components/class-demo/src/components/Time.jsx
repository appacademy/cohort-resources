import React, { useEffect, useState } from "react";

// const Time = props => {
//   const [timeData, setTimeData] = useState({});
//   // cannot make useEffect callback async
//   // only allowed to return null or a clean up function
//   // equivalent to componentDidMount
//   useEffect(() => {
//     console.log('inside useEffect')
    // const fn = async () => {
    //   console.log('firing off async request');
    //   try {
    //     let res = await fetch('http://worldtimeapi.org/api/ip');
    //     if (res.ok) {
    //       let data = await res.json();
    //       setTimeData(data);
    //     } else {
    //       throw res;
    //     }
    //   } catch {
    //     console.error('nice try');
    //   }
    // };
    // const timeReq = setInterval(fn, 1000);
//     return () => {
//       clearInterval(timeReq);
//     }
//   }, []);

//   return (
//     <p>It is currently: {timeData.datetime}</p>
//   )
// };

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeData: {},
      bestFruit: 'peach'
    };
  }

  componentDidMount() {
    console.log('just mounted fyi');

    const fn = async () => {
      console.log('firing off async request');
      try {
        let res = await fetch('http://worldtimeapi.org/api/ip');
        if (res.ok) {
          let data = await res.json();
          // setTimeData(data);
          this.setState({ timeData: data });
        } else {
          throw res;
        }
      } catch {
        console.error('nice try');
      }
    };
    this.timeReq = setInterval(fn, 1000);
  }

  componentDidUpdate(prepProps, prevState) {
    if (prevState.timeData.day_of_week && this.state.timeData.day_of_week !== prevState.timeData.day_of_week) {
      console.log('the day changed!');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeReq);
  }

  render() {
    return (
      <p>It is currently: {this.state.timeData.datetime}</p>
    )
  }
}

export default Time;