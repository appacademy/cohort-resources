import React from 'react';

// const Counts = ({ previousCounts }) => (
//   <ul>
//     {
//       previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
//     }
//   </ul>
// );

// For lifecycle method demo:
//
class Counts extends React.Component {
  componentWillMount() {}
  componentDidMount() { debugger }
  componentDidUpdate(prevProps) { debugger }
  componentDidUpdate(prevProps, prevState) { debugger }
  componentWillUnmount() { debugger }
  static getDerivedStateFromProps(props, state) { debugger }

  render() {
    return (
      <ul>
        {
          this.props.previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
        }
      </ul>
    )
  }
}

export default Counts;