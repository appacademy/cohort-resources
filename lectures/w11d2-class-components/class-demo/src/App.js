import React, { useState } from "react";
import Time from "./components/Time";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showTime: true,
      fruit: "banana"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){
    e.preventDefault();
    this.setState(oldState => ({showTime: !oldState.showTime}))
  }

  render() {
    return (
      <>
        <h1>Hello from App!</h1>
        <button onClick={this.clickHandler}>Toggle Time</button>
        {/* <Time banana={"banana"} /> */}
        {this.state.showTime && (
          <Time fruit={this.state.fruit}/>
        ) }
      </>
    );
  }
}


// function App() {

  // const [showTime, setShowtime] = useState(true)

//   return (
//     <>
//       <h1>Hello from App!</h1>
//       <Time banana={"banana"} />
//     </>
//   );
// }

export default App;

