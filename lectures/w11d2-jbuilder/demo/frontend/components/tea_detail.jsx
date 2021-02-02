import React from 'react';

class TeaDetail extends React.Component {
    // don't need to declare a constructor if you're not gonna set up state or bind functions

    componentDidMount () {
        this.props.requestTea(this.props.teaId);
    }
    
    render () {
        // return <div>Detailz</div>
        const transactions = this.props.transactions.map( transaction => {
            return (
            <div key={transaction.id}>Day Purchase: {new Date(transaction.createdAt).toDateString()}
                <div>Purchase Total: ${this.props.tea.amount * transaction.quantity}</div>
            </div>
            )
        });
        return (
            <div>
                <div>
                    Description: {this.props.tea.description}
                </div>
                <div>
                    Transactions: {transactions}
                </div>
            </div>
        )
    }
}

export default TeaDetail;