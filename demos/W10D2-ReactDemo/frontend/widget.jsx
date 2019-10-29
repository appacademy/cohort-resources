import React from 'react';
import JobIndex from './jobIndex';

class Widget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            baseLocation: "",
            listings: []
        };
        this.setLocation = this.setLocation.bind(this)
    }

    componentDidMount() {
        console.log(this);
    }

    fetchJobListings() {
        return $.ajax({
            url: `http://localhost:3000/jobs/index?location=${this.state.baseLocation}`,
            type: "GET",
            dataType: 'json'
        }).then((resp) => this.setState({listings: resp}));
    }

    setLocation(city) {
        //notice i am NOT using this.state =
        this.setState({baseLocation: city}, this.fetchJobListings);
    }

    render() {
        return (
            <div>
                <h1>Job Listings</h1>
                <h2>Current City: { this.state.baseLocation }</h2>
                <h3>Get Jobs:
                <button onClick={() => this.setLocation('Los Angeles')}>Los Angeles</button>
                <button onClick={() => this.setLocation('San Francisco')}>San Francisco</button>
                <button onClick={() => this.setLocation('New York')}>New York</button>
                </h3>
                <h2>{this.state.listings.length} Jobs Open</h2>
                <JobIndex jobs={this.state.listings}/>
            </div>
        );
    }
}

export default Widget;

// Common Bugs to Make

// setState async!
// not exporting/import correctly
  // forgetting curly braces
// forgetting to bind!
// attempt to print an object

//We will keep a bug list.

