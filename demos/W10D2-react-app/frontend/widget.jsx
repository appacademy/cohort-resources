import React from 'react';
import JobsIndex from './jobs_index';

// class component because it maintains local state
// make sure C is capitalized!!
class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseLocation: '',
      listings: []
    };
  }

  fetchJobs() {
    return $.ajax({
      url: `http://localhost:3000/jobs/index?location=${this.state.baseLocation}`
    }).then(response => {
      this.setState({ listings: response });
    });
  }

  setLocation(city) {
    this.setState({ baseLocation: city }, this.fetchJobs);
  }

  setLocation2(city) {
    // returning an event handler specific to each city using closures
    return () => {
      this.setState({ baseLocation: city }, this.fetchJobs);
    }
  }

  // dynamic event handler using the event to set location
  setLocation3(e) {
    this.setState({ baseLocation: e.target.innerText }, this.fetchJobs);
  } 

  render() {
    return (
      <div>
        <h1>Job Listings</h1>
        <h2>Current Location: {this.state.baseLocation}</h2>
        <h3>
          Get Jobs
          {/* wrap funtion call in anon fn since it takes args */}
          <button onClick={() => this.setLocation('Los Angeles')}>Los Angeles</button>
          <button onClick={this.setLocation2('San Francisco')}>San Francisco</button>
          <button onClick={this.setLocation3.bind(this)}>New York</button>
        </h3>
        {/* pass props as key-value pairs similar to HTML attributes */}
        <JobsIndex listings={this.state.listings} />
      </div>
    );
  }
}

export default Widget;