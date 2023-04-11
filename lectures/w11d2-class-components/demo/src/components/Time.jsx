// TODO: write a clock component

import React, {useState, useEffect} from 'react';

class Time extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      timeData: {}
    }
  }

  componentDidMount(){

    const getTime = async ()=>{
  
      try{
        let res = await fetch('http://worldtimeapi.org/api/ip');
        if(res.ok){
          let data = await res.json();
          this.setState({timeData: data});
        }
      } catch{
        console.error('no dice!')
      }
  
    }
  
    this.timeRequest = setInterval(getTime, 1000);
  
  }
  
  componentWillUnmount(){
    console.log('interval cleared')
    clearInterval(this.timeRequest)
  }

  componentDidUpdate(prevProps, prevState){
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState)
    if(prevState.timeData !== this.state.timeData){
      console.log(this.state.timeData)
    }

  }


  // useEffect(()=>{
  //   console.log(timeData);
  // }, [timeData])

  render(){
    return(
      <p>{this.state.timeData.datetime ? `It is currently: ${this.state.timeData.datetime}` : 'Loading...'}</p>
    )
  }

}


export default Time;


// function Time(props){

//   const [timeData, setTimeData] = useState({});


//   useEffect(()=>{
//     const getTime = async ()=>{

//       try{
//         let res = await fetch('http://worldtimeapi.org/api/ip');
//         if(res.ok){
//           let data = await res.json();
//           setTimeData(data);
//         }
//       } catch{
//         console.error('no dice!')
//       }

//     }

//     const timeRequest = setInterval(getTime, 1000);

//     return(()=>{
//       console.log('interval cleared')
//       clearInterval(timeRequest)
//     })

//   }, [])

//   useEffect(()=>{
//     console.log(timeData);
//   }, [timeData])


//   return(
//     <p>{timeData.datetime ? `It is currently: ${timeData.datetime}` : 'Loading...'}</p>
//   )

// }


// export default Time;