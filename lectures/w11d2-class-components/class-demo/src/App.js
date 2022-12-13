import React, { useState } from "react";
import Time from "./components/Time";

// function App() {
//   console.log('rendering');
//   const [showTime, setShowTime] = useState(true);

//   const clickHandler = e => {
//     e.preventDefault();
//     // preferred syntax whenever new value depends on old value
//     // pass in a callback that has the old value has a parameter
//     setShowTime(oldShowTime => (!oldShowTime));
//     // setShowTime(!showTime);
//   };
  
//   return (
//     <>
//       <h1>Hello from App</h1>
//       <button onClick={clickHandler}>Toggle Time</button>
//       {showTime && (
//         <Time />
//       )}
//     </>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTime: true
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState(oldState => ({ showTime: !oldState.showTime }))
  }

  render() {
    return(
      <>
        <h1>Hello from App</h1>
        <button onClick={this.clickHandler}>Toggle Time</button>
        {this.state.showTime && (
          <Time />
        )}
     </>
    )
  }
}

export default App;
