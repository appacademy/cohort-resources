import { useEffect, useState } from "react";

const Time = props => {
  const [timeData, setTimeData] = useState({});
  // cannot make useEffect callback async
  // only allowed to return null or a clean up function
  // equivalent to componentDidMount
  useEffect(() => {
    console.log('inside useEffect')
    const fn = async () => {
      console.log('firing off async request');
      try {
        let res = await fetch('http://worldtimeapi.org/api/ip');
        if (res.ok) {
          let data = await res.json();
          setTimeData(data);
        } else {
          throw res;
        }
      } catch {
        console.error('nice try');
      }
    };
    const timeReq = setInterval(fn, 1000);
    return () => {
      clearInterval(timeReq);
    }
  }, []);

  return (
    <p>It is currently: {timeData.datetime}</p>
  )
};

export default Time;