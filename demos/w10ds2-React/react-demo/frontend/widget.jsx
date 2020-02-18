import React from 'react';
import JobIndex from './job_index';

export default class Widget extends React.Component {

  constructor() {
    super();

    this.state = {
      baseLocation: "",
      listings: []
    };

    this.setLocation3 = this.setLocation3.bind(this);
  };

  setLocation1(city) {
    this.setState({
      baseLocation: city
    }, this.fetchJobListings)
  };

  setLocation2(city) {
    return () => this.setState({ baseLocation: city }, this.fetchJobListings);
  };

  setLocation3(e) {
    this.setState({ baseLocation: e.currentTarget.innerText }, this.fetchJobListings)
  };



  fetchJobListings() {
    
    return $.ajax({
      url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.baseLocation}`,
      type: 'GET'
    }).then((res) => {
      // debugger;
      this.setState({ listings: res })
    })
    
  }

  componentDidMount() {
    debugger;
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
  };

  componentWillUnmount() {
    debugger;
  }


  render() {
    // debugger;
    return (
      <div>
        <h1>Job Listings</h1>
        <h2>Current City: {this.state.baseLocation}</h2>
        <h3>Get Jobs: 
          <button onClick={() => this.setLocation1("Los Angeles")}>Los Angeles</button>
          <button onClick={this.setLocation2("San Francisco")}>San Francisco</button>
          <button onClick={this.setLocation3}>New York</button>
        </h3>
        <h2>{this.state.listings.length} Jobs Open</h2>
        <JobIndex listings={this.state.listings} banana={'banana'}/>
      </div>

    )
  }
};

