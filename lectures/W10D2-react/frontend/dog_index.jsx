import React from 'react';
import DogDetail from './dog_detail'
import {fetchDogGif} from '../utils/api_util'

class DogIndex extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            totalVotes: 0,
            gif: null
        }
        this.addVote = this.addVote.bind(this)
        this.breeds = [
            'Corgi',
            'Shiba',
            'Maltipoo',
            'Akita',
            'Husky',
            'Dire Wolf'
        ]
        // console.log('contructing')
    }

    componentDidMount() {
        fetchDogGif().then((dogGif) => {
            this.setState({gif: dogGif})
        })
    }

    addVote() {
        const newVotes = this.state.totalVotes + 1
        this.setState({totalVotes: newVotes})
        // console.log('hey how are ya?')
    }

    render() {
        // console.log("rendering..")
        // const mappedBreeds = this.breeds.map((breed,i) => {
        //     return <li onClick={this.addVote} key={i}>{breed}</li>
        //              })
        const mappedBreeds = this.breeds.map((breed,i) => {
            return <DogDetail key={i} breed={breed} addVote={this.addVote}/>
        })
        // if (!this.state.gif) return null;
        const image = this.state.gif ? <img src={this.state.gif.data.image_url} alt=""/> : null
        // console.log(this.state.gif)

        return (
            <div className="dog-index">
                <h1>Total Dog Votes:{this.state.totalVotes}</h1>
                <ul>
                    {mappedBreeds}
                </ul>
                {image}
            </div>
        )
    }
}

export default DogIndex