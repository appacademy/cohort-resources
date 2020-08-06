import React from 'react';

class TeaIndex extends React.Component {
    constructor(props) {
        super(props);
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
            </div>
        );
    }
};

export default TeaIndex;