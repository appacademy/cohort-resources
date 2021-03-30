import React from 'react';

class TeaDetail extends React.Component {

  componentDidMount() {
    this.props.fetchTea();
  }

  render() {
    console.log(this.props.transactions);
    // debugger
    return (
      <div className="tea-detail">
        <div className='tea-description'>
          {this.props.tea.description}
        </div>
        {this.props.transactions.map(obj => <li>{obj.customer}</li>)}
      </div>
    );
  }
}

export default TeaDetail;