import React from "react";

class DogDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: 0
        }
        this.addBreedVote = this.addBreedVote.bind(this);
    }

    addBreedVote() {
        this.setState({ votes: this.state.votes + 1 })
        this.props.addVote();
    }



    render() {
        return (
            <div onClick={ this.addBreedVote} className="dog-detail">
                {this.props.breed} : {this.state.votes}
            </div>
        )
    }

}

export default DogDetail;