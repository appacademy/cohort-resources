import React from 'react';

import AutoComplete from './auto';
import Clock from './clock';
import Weather from './weather';
import Tabs from './tabs';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayClock: true 
    }
  }
  
  toggleClockDisplay() {
    this.setState({ displayClock: !this.state.displayClock });
  }
  
  render() {
    const names = [
      'Abba',
      'Barney',
      'Barbara',
      'Jeff',
      'Jenny',
      'Sarah',
      'Sally',
      'Xander'
    ];

    const panes = [
      { title: 'one', content: 'I am the first' },
      { title: 'two', content: 'Second pane here' },
      { title: 'three', content: 'Third pane here' }
    ];

    return (
      <div>
        { this.state.displayClock ? <Clock /> : null }
        <button onClick={this.toggleClockDisplay.bind(this)} className="clock-toggle">
          { this.state.displayClock ? 'Unmount Clock' : 'Mount Clock' }
        </button>
        <Weather />
        <div className='interactive'>
          <Tabs panes={panes} />
          <AutoComplete names={names} />
        </div>
      </div>
    );
  }
}

export default Root;