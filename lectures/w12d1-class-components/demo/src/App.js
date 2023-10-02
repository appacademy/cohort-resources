import React, { useState } from "react";
import Time from "./components/Time";


// function App() {
//   // console.log("running");
//   const [showClock, setShowClock] = useState(true)

//   const handleClick = (e) => {
//     e.preventDefault();
//     setShowClock(!showClock)
//   }

//   return (
//     <>
//       {/* {console.log("returning")} */}
//       <h1>Hello from App!</h1>
//       <button onClick={handleClick}>{showClock ? "Hide" : "Show"} Clock</button>
//       {showClock ? (<Time />) : null }
//     </>
//   );
// }






class App extends React.Component {
  constructor(props){
    // console.log("constructor logic is running");
    super(props)
    this.state = {
      showClock: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e){
    // console.log("event is running");
    e.preventDefault();
    this.setState({showClock: !this.state.showClock})
    // this.setState((oldState, props) => {
    //   return {showClock: !oldState.showClock}
    // })
  }

  render(){
    // console.log("rendering");
    return  (
      <>
        <h1>Hello from App!</h1>
        <button onClick={this.handleClick}>{this.state.showClock ? "Hide" : "Show"} Clock</button>
        {/* <button onClick={() => this.handleClick}>{this.state.showClock ? "Hide" : "Show"} Clock</button> */}
        {this.state.showClock ? (<Time />) : null}
      </>
    ) 
  }
}

export default App;
