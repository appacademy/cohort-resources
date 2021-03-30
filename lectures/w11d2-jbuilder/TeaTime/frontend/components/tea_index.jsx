import React from 'react';
import TeaForm from './tea_form';
import TeaIndexItem from './tea_index_item';

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
        <div className="tea-index">
            <h1>All Teas</h1>
            <ul className='tea-list'>
                {
                    this.props.teas.map(tea => <TeaIndexItem key={tea.id} tea={tea} />)
                }
            </ul>

            <h1>Just Green Teas</h1>
            <ul>
                {
                    this.props.greenTeas.map(tea => <TeaIndexItem key={tea.id} tea={tea} />)
                }
            </ul>
            <TeaForm receiveTea={this.props.receiveTea} createTea4={this.props.createTea3}/>
        </div>
    )};
}

export default TeaIndex;