import React from 'react';
import TeaIndexItem from './tea_index_item';

class TeaIndex extends React.Component {
  render() {
    return (
      <div>
        { 
          this.props.teas.map( tea => <TeaIndexItem tea={tea} key={tea.id} /> )
        }
      </div>
    );
  }
}

// i don't know about my container!!!
export default TeaIndex;