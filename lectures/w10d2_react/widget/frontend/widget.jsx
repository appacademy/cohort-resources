import React from 'react';
import JobIndex from './job_index';

class Widget extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {  // only time you can directly set state -> in constructor
            city: '',
            listings: []
        }

        this.setLocation3 = this.setLocation3.bind(this); // whenever you want to bind, do it in constructor
    }

    setLocation(city) {
        this.setState({ city },this.fetchJobListings) // equivalent to below
        // this.setState({ city: city },this.fetchJobListings) // ASYNC!!!!!!
        // set state is async, first arg is what we want to change, second arg is callback that we want called after setting state
        // this.fetchJobListings(this.state.city) // NO, city is ''
    }

    setLocation2(city) {
        return(() => this.setState({ city },this.fetchJobListings)) // fat arrow preserves context
    }

    setLocation3(e) {
        this.setState({ city: e.target.innerText },this.fetchJobListings)
    }

    componentDidMount() {
        this.setLocation2('San Francisco')();
    }

    fetchJobListings() {
        return($.ajax({
            url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.city}`,
            method: "GET", 
        }).then(res => this.setState({ listings: res })))
        // ajax returns a promise after getting info from api
        // chain .then to update state once info is received 
    }

    render() {
        // this.fetchJobListings('San Francisco')
        console.log(this.state.listings)
        debugger
        return(
            <>
                <h1>Job Listings</h1>
                <h2>Current City: {this.state.city}</h2>
                <h3>Get Jobs:
                    {/* <button onClick={() => this.fetchJobListings('San Francisco')}>San Francisco</button> */}
                    <button onClick={() => this.setLocation('San Francisco')}>San Francisco</button>
                    <button onClick={this.setLocation2('Los Angeles')}>Los Angeles</button>
                    {/* <button onClick={this.setLocation3.bind(this) DONT BIND HERE}>New York</button> */}
                    <button onClick={this.setLocation3}>New York</button>
                </h3>
                <JobIndex listings={this.state.listings} banana={'banana'}/>
            </>
        )
    }
}

export default Widget;