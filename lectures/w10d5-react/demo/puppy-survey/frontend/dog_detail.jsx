import React from "react";

class DogDetail extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            votes: 0
        }
    }

    addBreedVote(){
        this.props.addVote(); //addVote is passed down as a prop
        const total = this.state.votes + 1;
        this.setState({votes: total});
    }

    render(){
        return(
            <div className="dog-detail" onClick={() => this.addBreedVote()}>
                {this.props.breed}: {this.state.votes}
                {/* props are passed down, state is local ^ */}
            </div>
        )
    }
}

export default DogDetail;



