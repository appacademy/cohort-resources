import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayClock: true
        }

        this.toggleClockDisplay = this.toggleClockDisplay.bind(this);
    }

    toggleClockDisplay() {
        this.setState({ displayClock: !this.state.displayClock });
    }

    render() {
        let tabList = [
            { title: 'First', content: 'Banana' },
            { title: 'Second', content: 'Peach' },
            { title: 'Third', content: 'Apple' }
        ];

        return (
            <div className='parent'>
                {this.state.displayClock ? <Clock toggleClockDisplay={this.toggleClockDisplay}/> : null}
                <button onClick={this.toggleClockDisplay.bind(this)} className="clock-toggle">
                    {this.state.displayClock ? 'Unmount Clock' : 'Mount Clock'}
                </button>

                <Tabs tabList={tabList}/>
            </div>
        );
    }
}

export default Root;