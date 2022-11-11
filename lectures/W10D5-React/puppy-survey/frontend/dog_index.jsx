import React from 'react';
import DogDetail from './dog_detail';
import {fetchDogGif} from './api_util'
// import APIUtil from './api_util'

class DogIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalVotes: 0,
            gif: null
        }

        this.breeds = [
            "Corgi",
            "Shiba",
            "Malamute",
            "Retriever",
            "Dire Wolf"
        ]

        this.addVote = this.addVote.bind(this)
    }

    componentDidMount() {
        debugger
        fetchDogGif().then(res => {
            this.setState({gif: res.data})
        })
    }

    addVote() {
        this.setState({totalVotes: this.state.totalVotes + 1})
    }

    render() {
        debugger
        // if (!this.state.gif) return <h2>Waiting for gif to be fetched</h2>


        const image = this.state.gif ? <img src={this.state.gif.images.downsized.url} /> : null

        const allBreeds = this.breeds.map((breed, idx) => {
            return(
                <DogDetail key={idx} breed={breed} addVote={this.addVote}/>
            )
        })

        

        return(
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