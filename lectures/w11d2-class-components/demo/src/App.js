import React, { useState } from 'react';
import './App.css';
import Time from './components/Time';

// const App = () => {
//   const [showTime, setShowTime] = useState(true);

//   const toggleHandler = e => {
//     e.preventDefault();
//     // whenever the new state value is dependent on the old, we should use a callback
//     // setShowTime(!showTime); 
//     setShowTime(prev => !prev);
//   };

//   return (
//     <>
//       <button onClick={toggleHandler}>Toggle Time</button>
//       <div className="App">
//         {showTime && (
//           <Time />
//         )}
//       </div>
//     </>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTime: true,
      testVar: 'banana'
    };
    
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler(e) {
    e.preventDefault();
    // this.setState({ showTime: !showTime });
    this.setState((state, props) => ({ showTime: !state.showTime }));
  }

  render() {
    const button = <button onClick={this.toggleHandler}>Toggle Time</button>;

    return (
      <>
        {button}
        <div className="App">
          {this.state.showTime && (
            <Time />
          )}
        </div>
      </>
    );  
  }
};

export default App;
