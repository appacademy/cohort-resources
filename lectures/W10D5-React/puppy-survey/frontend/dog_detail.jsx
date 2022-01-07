import React from 'react';

class DogDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            votes: 0
        }

        this.addBreedVote = this.addBreedVote.bind(this);
    }

    addBreedVote() {
        this.props.addVote();
        const total = this.state.votes + 1;
        this.setState({votes: total});
    }

    render() {
        return(
            <div className='dog-detail' onClick={this.addBreedVote}>
                {this.props.breed} : {this.state.votes}
            </div>
        )
    }
}

export default DogDetail;