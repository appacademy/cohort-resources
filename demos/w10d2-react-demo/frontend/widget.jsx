import React from 'react';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      listings: []
    };

    this.setLocation3 = this.setLocation3.bind(this);
  }

  fetchJobListings() {
    return $.ajax({
      url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.city}`,
      type: "GET"
    }).then(res => this.setState({listings: res}));
  }

  setLocation(city) {
    this.setState({city}, this.fetchJobListings);
  }

  setLocation2(city) {
    return(() => {
      this.setState({ city }, this.fetchJobListings);
    })
  }

  setLocation3(event) {
    this.setState({city: event.currentTarget.innerText}, this.fetchJobListings)
  }
  
  render(){
    // this.fetchJobListings("Los Angeles");
    return (
      <div>
        <h1>Job Listings</h1>
        <h2>Current City: {this.state.city}</h2>
        <button onClick={() => this.setLocation("Los Angeles")}>Los Angeles</button>
        <button onClick={this.setLocation2("San Francisco")}>San Francisco</button>
        <button onClick={this.setLocation3}>New York</button>
      </div>
    )
  }
}

export default Widget;