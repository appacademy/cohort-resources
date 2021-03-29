import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
    // runs first
    constructor(props) {
        super(props);
    }

    // runs after the first render
    componentDidMount() {
        this.props.fetchAllTeas();
    }

    // runs after constructor, then again after any connected state/props change
    render() {
        return (
        <div>
            <h1>All Teas</h1>
            <ul>
                {
                    this.props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}</li>)
                }
            </ul>

            <h1>Just Green Teas</h1>
            <ul>
                {
                    this.props.greenTeas.map(tea => <li key={tea.id}>{tea.flavor}: {tea.amount}</li>)
                }
            </ul>
            <TeaForm receiveTea={this.props.receiveTea}/>
        </div>
    )};
}

export default TeaIndex;