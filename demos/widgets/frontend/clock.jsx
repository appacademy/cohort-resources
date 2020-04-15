import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
        // debugger
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: new Date() });
        console.log('ticked');
    }

    componentDidMount() {
        // debugger
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        // debugger
        clearInterval(this.interval);
    }

    render() {
        let hours = this.state.time.getHours()
        hours = (hours < 10) ? '0' + hours : hours;
        
        let minutes = this.state.time.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;

        let seconds = this.state.time.getSeconds();
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let date = this.state.time.toDateString();

        return (
            <div className="clock">
                <h1>Clock</h1>
                <main>
                    <span className="time">
                        <span>Time:</span>
                        <span>{hours}:{minutes}:{seconds}</span>
                    </span>

                    <span className="date">
                        <span>Date:</span>
                        <span>{date}</span>
                    </span>
                </main>
                {/* <button onClick={this.props.toggleClockDisplay} className="clock-toggle">
                    Change state in Root Component
                </button> */}
            </div>
        )
    }
}

export default Clock;