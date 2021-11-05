import React from "react";

class DogIndexItem extends React.Component{
    constructor(props){
        super(props);
        

        this.state = {
            votes: 0
        }
        this.addBreedVote = this.addBreedVote.bind(this);
    }

    addBreedVote(){
        let votes = this.state.votes + 1
        this.setState({votes});
        this.props.updateParent();
    }

    render(){
        return(
            <li className="dog-details" onClick={this.addBreedVote}>
                {this.props.name}: {this.state.votes} 
            </li>
        )
    }
}   

export default DogIndexItem;