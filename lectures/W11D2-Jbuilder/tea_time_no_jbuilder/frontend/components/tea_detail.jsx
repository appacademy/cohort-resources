import React from 'react';

class TeaDetail extends React.Component {

  componentDidMount() {
    this.props.requestTea(this.props.teaId);
  }

  render() {
    const { tea, transactions } = this.props;
    return (
      <div className="tea-detail">
        <div className="tea-description">
          {tea.description}
        </div>
        <ul className="tea-transactions">
          <div className="tea-transaction columns">
            <p>Customer</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          {transactions.map(transaction => {
            return (
              <div className="tea-transaction" key={transaction.id}>
                <p>{transaction.customer}</p>
                <p>{transaction.quantity}</p>
                <p>${tea.amount}</p>
                <p>${tea.amount * transaction.quantity}</p>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default TeaDetail;