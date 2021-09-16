import React from "react";
import TeaForm from "./TeaForm";


class TeaIndex extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.fetchAllTeas();
  };

  render(){

    return (
      <div>
      <h1>These are all the teas...</h1>
      <ul>
        {this.props.teas.map((tea,i )=> <li key={i}>{tea.flavor }</li>)}
      </ul>
      <h2>Tea Form</h2>
      <TeaForm createTea={this.props.createTea} />
    </div>
    )
  };

};

export default TeaIndex;