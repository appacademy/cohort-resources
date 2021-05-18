import React from 'react';

class DogDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            votes: 0
        }
        console.log("constructing..")
        this.addBreedVote = this.addBreedVote.bind(this)
    }

    addBreedVote() {
        this.props.addVote()
        const breedTotal = this.state.votes + 1
        this.setState({votes: breedTotal })
    }

    render() {
        // console.log(this.props)
        return (
            <li className="dog-detail" onClick={this.addBreedVote}>{this.props.breed}: {this.state.votes}</li>
        )
    }
}

export default DogDetail;