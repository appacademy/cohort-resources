import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      this.props.fetchAllTeas();
    }

    render() {
        // debugger;
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
                <TeaForm receiveTea={this.props.receiveTea} createTea={this.props.createTea}/>
            </div>
        );
    }
};

export default TeaIndex;