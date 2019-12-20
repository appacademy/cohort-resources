// React Component to render UI View
import React, { Component } from 'react'

import TeaIndexItem from './tea_index_item';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger; 
    this.props.fetchAllTeas(); 
  }

  render() {
    debugger; 
    let { teas, receiveTea, createTea } = this.props;

    return (
      <div>
        <h1>All Teas</h1>
        <ul>
          {
            teas.map(tea => <TeaIndexItem tea={tea} key={tea.id} />)
          }
        </ul>
        <TeaForm createTea={createTea} receiveTea={receiveTea} />
      </div>
    )
  }
}

export default TeaIndex;
