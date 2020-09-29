import React from 'react';
import JobIndex from './job_index';

class Widget extends React.Component{
  constructor(){
    super(); //allows us to use this keyword 
    this.state = { city: "", listings: [] };
    this.setLocation3 = this.setLocation3.bind(this);
    //more optimal to bind in constructor because the constructor runs once 

  }

  setLocation(city){
    this.setState({city: city}, this.fetchJobListings) //updating state 
    //this.fetchJobListing runs after state is updated 
    //setState is async 
  }

  
  fetchJobListings(){
    $.ajax({
      url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.city}`,
      method: "GET",
    }).then(listings => this.setState({listings})) //sugar 
    // }).then(listings => this.setState({listings: listings}))
  }
  
  setLocation2(city){
    //this returns a new function
    //this is preserved 
    return () => {
      this.setState({ city: city }, this.fetchJobListings);
    }
  }

  setLocation3(e){
    //this => window 
    this.setState({city: e.target.innerText}, this.fetchJobListings)
  }

  render(){
    return (
      <div>
        <h1>Job Listings</h1>
        <h2>Current City: LA</h2>
        <h3>Get Jobs
          <button onClick={() => this.setLocation("Los Angeles")}>LA</button>
          <button onClick={this.setLocation2("San Francisco")}>SF</button>
          <button onClick={this.setLocation3}>New York</button>
        </h3>
        <JobIndex banana={this.state.listings}/> 
      </div>
    )
    
  }
}

export default Widget;