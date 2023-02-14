import React, {useEffect, useState} from "react";

class Time extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            timeData: {}
        }
        debugger
    }

    componentDidMount(){
        debugger
        // console.log("we hit component did mount")
        const getDate = async () =>{
            try{
                let res = await fetch('http://worldtimeapi.org/api/ip');
                if(res.ok){
                    let data = await res.json();
                    this.setState({timeData: data})
                } else {
                    throw res;
                }
            } catch {
                console.log("nice try!")
            }
        }
        this.timeReq = setInterval(getDate, 5000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.timeData.day_of_week && prevState.timeData.day_of_week !== this.state.timeData.day_of_week){
            debugger
            console.log("HAPPY NEW DAY!")
        }
    }

    componentWillUnmount(){
        debugger
        clearInterval(this.timeReq)
        // console.log("the component has been unmounted")
    }



    render(){
        debugger
        return(
            <>
                {console.log(this.state.timeData)}
                <p>The current time is: {this.state.timeData.datetime} </p>
            </>
        )
    }
}

// function Time (props) {
//     const [timeData, setTimeData] = useState({})

//     useEffect(()=>{
//         const getTime = async () =>{
//             try {
//                 let res = await fetch('http://worldtimeapi.org/api/ip');
//                 if(res.ok) {
//                     let data = await res.json();
//                     setTimeData(data)
//                 } else {
//                     throw res;
//                 }
//             } catch {
//                 console.log("nice try!")
//             }
//         }

//         const timeRequest = setInterval(getTime, 1000)
//         // clearInterval(timeRequest)
//         return () => {
//             clearInterval(timeRequest)
//         }
//     }, [timeData])

//     return(
//         <>
//             <p>{props.banana}</p>
//             <p>The current time is: {timeData.datetime} </p>
//         </>
//     )
// }

export default Time;