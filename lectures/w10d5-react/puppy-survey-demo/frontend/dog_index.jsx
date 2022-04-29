import React from 'react';
import DogDetail from './dog_detail';

class DogIndex extends React.Component {
    constructor(props) {
        super(props);
        // initialize state
        this.state = {
            totalVotes: 0
        }

        this.breeds = [
            'Corgi',
            'Malamute',
            'Golden Retriever',
            'German Shepard',
            'Bloodhound'
        ];
        //bind callbacks
        this.addVote = this.addVote.bind(this);
    }

    addVote() {
        this.setState({
            totalVotes: this.state.totalVotes + 1
        });
    }

    render() {
        const allBreeds = this.breeds.map((breed, idx) => (
            <DogDetail key={idx} breed={breed} addVote={this.addVote} />
        ));

        return (
            <div>
                <h1>Total dog votes: {this.state.totalVotes}</h1>
                <ul>
                    {allBreeds}
                </ul>
            </div>
        )
    }
}

export default DogIndex;