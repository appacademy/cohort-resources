import React from 'react';

import DogDetail from './dogDetail';

// list some dogs that we can vote on
class DogIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalVotes: 0
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

  render() {

    const allBreeds = this.breeds.map((breed, idx) => {
      return(
        <DogDetail key={idx} breed={breed} addVote={this.addVote} />
      )
    });

    return(
      <div className="dog-index"> 
        <h1>Total dog votes: {this.state.totalVotes}</h1>
        <ul>
          {allBreeds}
        </ul>
      </div>
    )
  }
}

export default DogIndex;