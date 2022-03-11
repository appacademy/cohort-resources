import React from 'react';
// import {requestTea} from '../actions/tea_actions'; // cant do this

class TeaDetail extends React.Component {

  componentDidMount() {
    this.props.requestTea(this.props.tea.id)
  }

  render() {
    // debugger
    const {tea, transactions} = this.props;
    return (
      <div>
        <div className="tea-description">
        {tea.description}
      </div>
      <ul className="tea-detail">
        {transactions.map((transaction) => {
          return(
            <div className="tea-transaction" key={transaction.id}>
              <li>{transaction.customer}</li>
              <li>{transaction.quantity}</li>
              <li>{tea.amount * transaction.quantity}</li>
            </div>
          )
        })}
      </ul>
      </div>
      
    );
  }
}

export default TeaDetail;