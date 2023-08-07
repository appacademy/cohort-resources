import React, { useState } from 'react'
import './App.css'
import Time from './components/Time/Time'

// function App() {
//   const [showTime, setShowTime] = useState(true)

//   const handleClick = e => {
//     setShowTime(prev => !prev)
//   }

//   return (
//     <>
//       <h1>My Time App</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {showTime && (
//         <Time />
//       )}
//     </>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      showTime: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // this.setState({ showTime: !this.state.showTime })
    this.setState((prevState) => {
      return { showTime: !prevState.showTime }
    })
  }
  
  render() {
    return(
      <>
        <h1>My Time App</h1>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.showTime && (
          <Time />
          )}
      </>
    )
  }
}

export default App