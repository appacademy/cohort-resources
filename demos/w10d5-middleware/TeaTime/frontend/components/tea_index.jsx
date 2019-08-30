import React from 'react';
import TeaIndexItem from './tea_index_item';

class TeaIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTeas();
  }

  render() {
    let teas;
    if (!this.props.teas) {
      teas = new Array();
    } else {
      teas = this.props.teas;
    }

    return (
      <div>
        { 
          teas.map( tea => <TeaIndexItem tea={tea} key={tea.id} /> )
        }
      </div>
    );
  }
}

// i don't know about my container!!!
export default TeaIndex;