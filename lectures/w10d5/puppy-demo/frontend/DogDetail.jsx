import React from "react";

class DogDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = { //LOCAL state
            votes: 0
        };
        this.addBreedVote = this.addBreedVote.bind(this) // keep ctx
    }

    addBreedVote(){
        this.props.addVote(); //comes from parent through props, increase count of all dogs
        this.setState({ votes: this.state.votes + 1 }) 
    }

    render(){
        return(
            <div className="dog-detail" onClick={this.addBreedVote}>
                {this.props.breed}:  {this.state.votes}
            </div>
        )
    }
}

export default DogDetail;
