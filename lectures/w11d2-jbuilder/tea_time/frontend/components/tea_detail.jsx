import React from 'react';

class TeaDetail extends React.Component {

  componentDidMount() {
    this.props.requestTeaDetail(this.props.tea.id)
  }

  render() {
    // debugger;
    return (
      <div className='tea-detail'>
        <div className="tea-description">
          {this.props.tea.description}
        </div>
        <ul className='tea-transactions'>
          { this.props.transactions.map( transaction => {
            return (
              <div className='tea-transaction' key={transaction.id}>
                <p>{transaction.customer}</p>
                <p>{transaction.quantity}</p>
                <p>${this.props.tea.amount}</p>
                <p>${this.props.tea.amount * transaction.quantity}</p>
              </div>
            )
          }) }
        </ul>
      </div>
    );
  }
}

export default TeaDetail;