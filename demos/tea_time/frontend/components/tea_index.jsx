import React from 'react';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.addGreenTea = this.addGreenTea.bind(this);
  }
  
  addGreenTea() {
    this.props.receiveTea({
      flavor: 'green',
      amount: 2.50,
      id: this.props.teas.length + 1
    })
  }

  componentDidMount() {
    debugger
    this.props.requestTeas();
  }
  
  render() {
    debugger
    return (
      <div>
        <h1>All Teas</h1>
        <ul>
          {/* gets teas in props via container */}
          {this.props.teas.map(tea => {
            // <TeaIndexItem tea={tea} />
            return (
              <div key={tea.id}>
                <li>{tea.flavor}</li>
                <li>{tea.amount}</li>
                <li>{tea.id}</li>
              </div>
            )
          })}
        </ul>
        <button onClick={this.addGreenTea}>Add Green Tea!!</button>
      </div>
    );
  }
}

export default TeaIndex;