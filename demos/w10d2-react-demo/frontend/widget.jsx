import React from 'react';
import JobIndex from './job_index';

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'San Francisco',
            listings: []
        };
        this.setLocation3 = this.setLocation3.bind(this);
    }

    componentDidMount() {
        // fetch initial data we want on the page
        this.fetchJobListings();
    }

    fetchJobListings() {
        return $.ajax({
            url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.location}`,
            type: "GET",
        }).then(res => this.setState({ listings: res }));
    }

    setLocation(city) {
        // setState is asynchronous
        this.setState({
            location: city
        }, this.fetchJobListings);
    }

    setLocation2(city) {

        return () => {
            this.setState({ location: city }, this.fetchJobListings);
        };
    }

    setLocation3(e) {
        this.setState({
            location: e.currentTarget.innerText
        }, this.fetchJobListings);
    }

    render() {

        return (
            <div>
                <h1>Get Jobs!</h1>
                <h2>Current City: {this.state.location}</h2>
                <button onClick={() => this.setLocation('San Francisco')}>San Francisco</button>
                <button onClick={this.setLocation2('Los Angeles')}>Los Angeles</button>
                <button onClick={this.setLocation3}>New York</button>
                <h3>Job Listings:</h3>
                <JobIndex listings={this.state.listings}/>
            </div>
        );
    }
}

export default Widget;