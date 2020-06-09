import React from 'react';
import JobIndex from './jobindex'

export default class Widget extends React.Component{
    constructor(){
        super()
        // debugger
        this.state = {location: "", listings: []}
        this.setLocationNY = this.setLocationNY.bind(this)
    }
    fetchJobListings(city){
        // debugger
        return $.ajax({
            url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${city}`
            // method: 'GET'

        }).then(res => this.setState({listings: res}))
    }

    setLocationLA(city){
        // debugger
        this.setState({location: city},() => this.fetchJobListings(this.state.location))
        
    }

    setLocationSF(city){
       return () => {
        this.setState({location: city},() => this.fetchJobListings(this.state.location))
       } 
    }
    setLocationNY(){
        this.setState({location: 'New York'}, () => this.fetchJobListings(this.state.location) )
    }

    componentDidUpdate(prevProps, prevState){
        debugger
    }

    // componentDidMount(){
    //     debugger
    // }

    componentWillUnmount(){

    }

    render(){
        // debugger
        return(
            <>
                <h1>Job Listings</h1>
                <h2>Current city: Los Angeles</h2>
                <h3>Get Jobs:</h3>
                <button onClick={() => this.setLocationLA('Los Angeles')}>Los Angeles</button>
                <button onClick={this.setLocationSF('San Francisco')}>San Francisco</button>
                <button onClick={this.setLocationNY}>New York</button>
                <JobIndex jobs={this.state.listings} />
            </>
        )
    }
}


// export default Widget;