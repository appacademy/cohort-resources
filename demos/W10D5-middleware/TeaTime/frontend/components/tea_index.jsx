import React from 'react';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllTeas();
  }
  
  render() {
    return (
      <div>
        <h3>All Teas</h3>
        <ul>
          {this.props.teas.map((tea, i) => {
            return (
              <ul key={i} >
                <li>This is tea number: {tea.id}</li>
                <li>This is a: {tea.flavor} tea</li>
                <li>It costs {tea.amount}</li>
                <br></br>
              </ul>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default TeaIndex;