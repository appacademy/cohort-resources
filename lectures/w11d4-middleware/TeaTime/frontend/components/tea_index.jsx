import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllTeas() //populates our redux store (tea slice of state)
  }

  render(){
    return (
      <div>
        <h1>These are all of our TEAS</h1>
        <ul>
          {this.props.teas.map(tea => {
            return <li key={tea.id} >Flavor: {tea.flavor}</li>
          })}
        </ul>
  
        <TeaForm createTea={this.props.createTea} />
      </div>
    );
  }
}

export default TeaIndex;