import React, { useEffect, useState } from 'react'
import './Time.css'

// const Time = props => {
//   const [timeData, setTimeData] = useState({})

//   useEffect(() => {
//     // only allowed to return null or a cleanup function
//     const getTime = async () => {
//       try {
//         const res = await fetch('http://worldtimeapi.org/api/ip')
//         if (res.ok) {
//           const data = await res.json()
//           setTimeData(data)
//         } else {
//           throw res
//         }
//       } catch {
//         console.error('something went wrong')
//       }
//     }

//     getTime()
//     const fetchInt = setInterval(() => {
//       console.log('fetching time...')
//       getTime()
//     }, 1000)

//     return () => {
//       console.log('unmounting...')
//       clearInterval(fetchInt)
//     }
//   }, [])

//   return (
    // <>
    //   <h2>Time</h2>
    //   <p>It is currently: {timeData.datetime}</p>
    // </>
//   )
// }

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeData: {}
    }
  }

  componentDidMount() {
    const getTime = async () => {
      try {
        const res = await fetch('http://worldtimeapi.org/api/ip')
        if (res.ok) {
          const data = await res.json()
          // setTimeData(data)
          this.setState({ timeData: data })
        } else {
          throw res
        }
      } catch {
        console.error('something went wrong')
      }
    }

    getTime()
    this.intervalId = setInterval(() => {
      console.log('fetching time...')
      getTime()
    }, 1000)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('updating...')
  //   console.log('prevState', prevState)
  // }

  componentWillUnmount() {
    console.log('unmounting...')
    clearInterval(this.intervalId)
  }

  render() {
    const { timeData } = this.state

    return(
      <>
        <h2>Time</h2>
        <p>It is currently: {timeData.datetime}</p>
      </>
    )
  }
}

export default Time