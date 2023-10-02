import React, { useEffect, useState } from "react";

const Time2 = (props) => {
    console.log("running");

    const [timeData, setTimeData] = useState({})

    useEffect(()=>{
        // {console.log("use effect is running")}
        const fn = async    () => {
            // console.log("fn is running....");
            try {
                let res = await fetch('http://worldtimeapi.org/api/ip')
                if (res.ok){
                    let data = await res.json()
                    // console.log(data.datetime)
                    setTimeData(data)
                } else {
                    throw res;
                }
            } catch (error) {
                console.log("Nice try, bro");
            }
        }
        // fn()
        const timeRequest = setInterval(fn, 1000)

        return () => {
            // console.log("component is unmounting")
            clearInterval(timeRequest)
        }
    }, [])


    return(
        <>
        {/* {console.log("returning")} */}

            <h1>It is currently: {timeData.datetime}</h1>
        </>
    )
}


















class Time extends React.Component {
    constructor(props){
        console.log("construction of object");
        super(props)
        this.state = {
            timeData: {}
        }
    }

    componentDidMount(){
        console.log("component has mounted");
        const fn = async () => {
            // console.log("fn is running....");
            try {
                let res = await fetch('http://worldtimeapi.org/api/ip')
                if (res.ok){
                    let data = await res.json()
                    // console.log(data)
                    // this.setState((oldState, props) => ({timeData: data}) )
                    this.setState({timeData: data}) 
                } else {
                    throw res;
                }
            } catch (error) {
                console.log("Nice try, bro");
            }
        }
        this.timeRequest = setInterval(fn, 1000)
    }


    componentDidUpdate(prevProps, prevState){
        console.log("Component has updated");
        if (prevState.timeData.day_of_week !== this.state.timeData.day_of_week){
            console.log("Good morning sunshine!");
        }
    }

    componentWillUnmount(){
        console.log("component is unmounting");
        clearInterval(this.timeRequest)
    }


    render(){
        console.log("component is rendering");
        return(
            <>
                <h1>It is currently: {this.state.timeData.datetime}</h1>
            </>
        )
    }
}




export default Time;