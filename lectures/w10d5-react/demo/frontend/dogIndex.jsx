import React from 'react';

import DogDetail from './dogDetail';
import { fetchDogGif } from './api_util';

// list some dogs that we can vote on
class DogIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalVotes: 0,
      gif: null
    }

    this.breeds = [
      "Australian Mountain Dog",
      "Australian Shepherd",
      "Corgi",
      "Golden Retriever",
      "Shiba Inu",
      "Sivas Kangal",
      "Papillon",
      "Pug"
    ]

    this.addVote = this.addVote.bind(this);
  }

  addVote() {
    this.setState({totalVotes: this.state.totalVotes + 1})
  }

  componentDidMount() {
    fetchDogGif().then(dogGif => {
      this.setState({gif: dogGif})
    })
  }

  render() {

    const allBreeds = this.breeds.map((breed, idx) => {
      return(
        <DogDetail key={idx} breed={breed} addVote={this.addVote} />
      )
    });

    // console.log(this.state.gif)

    // wont render anything until gif request complete
    // if (!this.state.gif) return null;

    // use a ternary so that we only set image to null before the request finishes
    const image = this.state.gif ? <img src={this.state.gif.data.image_url} /> : null;

    return(
      <div className="dog-index"> 
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