import React from 'react';
import JobIndex from './jobIndex';

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      listings: []
    };

    // this.setLocation3 = this.setLocation3.bind(this);
  }

  fetchJobListings() {
    return $.ajax({
      url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.city}`,
      method: "GET",
    }).then((res) => this.setState({listings: res}));
  }

  setLocation(city) {
    this.setState({city}, this.fetchJobListings)
  }

  setLocation2(city) {
    return () => {
      this.setState({city}, this.fetchJobListings)
    }
  }

  setLocation3(e) {
    this.setState({city: e.currentTarget.innerText}, this.fetchJobListings)
  }

  componentDidMount() {
    // debugger;
    this.setLocation("San Francisco");
  }

  render() {
    // debugger;
    // this.fetchJobListings('San Francisco');
    // console.log(this.state);
    return (
      <div>
        <h2>Job Listings</h2>
        <h3>Current City: {this.state.city}</h3>
        <h3>Get Jobs:</h3>
        <button onClick={() => this.setLocation('San Francisco')}>San Francisco</button>
        <button onClick={this.setLocation2('Los Angeles')}>Los Angeles</button>
        <button onClick={this.setLocation3.bind(this)}>New York</button>
        <JobIndex listings={this.state.listings}/>
      </div>
    )
  }


};

export default Widget;