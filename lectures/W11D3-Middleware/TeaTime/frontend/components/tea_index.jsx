import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchAllTeas();
  }

  render() {
    debugger
    return (
      <div>
        <h1>All Teas</h1>
        <ul>
          {
            this.props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}</li>)
          }
        </ul>
        <TeaForm receiveTea={this.props.receiveTea} createTea={this.props.createTea}/>
        <h3>Green Teas</h3>
        <ul>
          {
            this.props.greenTeas.map((tea) => (
              <li key={tea.id}>{tea.flavor}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TeaIndex;