import React from "react";
import DogIndexItem from "./dogIndexItem";
import { fetchDogGif } from './dogApiUtil'

//class component:
class DogIndex extends React.Component{
    constructor(props){
        super(props);
        this.dogs = ["Corgi", "Shiba", "Husky", "Westie", "Labrador", "Malamute"]; //not state
        this.state = {
            totalVotes: 0,
            gif: <p>Loading...</p>
        };
        this.addVote = this.addVote.bind(this);
    }

    componentDidMount(){
        fetchDogGif().then(res => {
            let url = res.data.url;
            this.setState({gif: <p>{url}</p>}) 
        });

    }

    addVote(){
        let nextCount = this.state.totalVotes + 1;
        this.setState({totalVotes: nextCount});
    }

    breedLis(){
        return this.dogs.map((dog, i) => {
            // return <li onClick={() => this.addVote()} key={i}>{dog}</li>
            // return <li onClick={this.addVote.bind(this)} key={i}>{dog}</li>
            // return <li onClick={this.addVote} key={i}>{dog}</li>
            return (
                <DogIndexItem key={i} name={dog} updateParent={this.addVote} />
            )
        })
    }

    render(){
        return(
            <div className="dog-index">
                <h2>Total Votes: {this.state.totalVotes}</h2>
                <ul>
                    {this.breedLis()}
                </ul>
                {this.state.gif}
            </div>
        )
    }
}

export default DogIndex;