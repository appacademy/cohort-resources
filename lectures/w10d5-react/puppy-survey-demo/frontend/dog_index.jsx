import React from 'react';
import DogDetail from './dog_detail';
import { fetchDogGif } from './api_util';

class DogIndex extends React.Component {
    constructor(props) {
        super(props);
        // initialize state
        this.state = {
            totalVotes: 0,
            gif: null
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

    componentDidMount() {
        this.fetchNewGif();
    }

    fetchNewGif() {
        fetchDogGif().then(res => {
            this.setState({ gif: res.data.images });
        });
    }

    addVote() {
        this.fetchNewGif();
        this.setState({
            totalVotes: this.state.totalVotes + 1
        });
    }

    render() {
        const image = this.state.gif ? <img src={this.state.gif.fixed_height.url}></img> : null

        const allBreeds = this.breeds.map((breed, idx) => (
            <DogDetail key={idx} breed={breed} addVote={this.addVote} />
        ));

        return (
            <div className='dog-index'>
                <h1>Total dog votes: {this.state.totalVotes}</h1>
                {image}
                <ul>
                    {allBreeds}
                </ul>
            </div>
        )
    }
}

export default DogIndex;