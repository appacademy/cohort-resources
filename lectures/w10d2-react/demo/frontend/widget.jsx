import React from 'react';
import JobIndex from './job_index';

class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      listings: []
    }

    this.setLocation3 = this.setLocation3.bind(this); 
  }

  fetchJobListings() {
    return $.ajax({
      url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.city}`,
      method: "GET",
    }).then(res => this.setState({listings: res}));
  }

  setLocation(city) {
    // this.setState({ city: city }, this.fetchJobListings)
    this.setState({ city }, this.fetchJobListings)
  }

  setLocation2(city) {
    // return a function, fat arrow passes context
    return () => this.setState({ city }, this.fetchJobListings)
  }

  setLocation3(event) {
    // use the event, no fat arrow, must bind
    this.setState({ city: event.currentTarget.innerText }, this.fetchJobListings)
  }

  render () {
    return(
      <div>
        <h1>Job Listings</h1>
        <h2>Current City: {this.state.city}</h2>
        <h3>Get Jobs: 
          <button onClick={() => this.setLocation("Los Angeles")}>Los Angeles</button>
          <button onClick={this.setLocation2("San Francisco")}>San Francisco</button>
          <button onClick={this.setLocation3}>New York</button>
        </h3>
        {/* when state.listings changes, component rerenders with new props */}
        <JobIndex listings={this.state.listings} />
      </div>
    );
  }
}

export default Widget;