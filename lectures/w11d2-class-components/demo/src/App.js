import React, { useState } from "react";
import Time from "./components/Time";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      time: false
    }
    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(e){
    e.preventDefault();
    this.setState({time: !this.state.time})
  }



  render(){
    const {time} = this.state;
    return (
      <>
        <h1>Hello from App!</h1>
        <button onClick={this.clickHandler}>Toggle Time</button>
        {time &&
          <Time />
        }
      </>
    );
  }
}

export default App;



// function App() {
//   const [showTime, setShowTime] = useState(false);

//   const clickHandler = (e)=>{
//     e.preventDefault();
//     setShowTime((oldShowTime)=> !oldShowTime)
//   }
//   return (
//     <>
//       <h1>Hello from App!</h1>
//       <button onClick={clickHandler}>Toggle Time</button>
//       {showTime &&
//         <Time />
//       }
//     </>
//   );
// }

// export default App;
