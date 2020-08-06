import React from 'react';

class TeaIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let milkTea = { id: 87364871, flavor: 'Milk Tea', amount: 12 };
        this.props.receiveTea(milkTea);
    }

    render() {
        debugger;
        return (
            <div>
                <h1>THIS IS THE TEA INDEX</h1>
                <ul>
                    {this.props.teas.map((tea) => {
                        return (
                            <li key={tea.id}>
                                <div>Flavor: {tea.flavor}</div>
                                <div>Amount: {tea.amount}</div>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={this.handleClick}>Add Milk Tea</button>
            </div>
        );
    }
};

export default TeaIndex;