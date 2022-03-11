import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        debugger;
        this.props.fetchAllTeas();
    }
    // debugger;
    render() {
        debugger;
        return (
            <div>
                <h2>All Teas</h2>
                <ul>
                    {
                        this.props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}</li>)
                    }
                </ul>
                <h3>Green Teas</h3>
                <ul>
                    {
                        this.props.greenTeas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}, ID: {tea.id}</li>)
                    }
                </ul>
                <h3>Black Teas</h3>
                <ul>
                    {
                        this.props.blackTeas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}, ID: {tea.id}</li>)
                    }
                </ul>
                <TeaForm createTea={this.props.createTea}/>
            </div>
        )
    }
}

export default TeaIndex;