import React from 'react';
import DogIndexItem from './dog_index_item';
import { fetchDogGif } from './api_util';

class DogIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      totalVotes: 0,
      gif: null
    };

    this.breeds = [
      'Border Collie',
      'Samoyed',
      'Poodle',
      'Hot Dog',
      'Sheltie',
      'Chonker'
    ];

    this.addTotalVote = this.addTotalVote.bind(this);
  }

  addTotalVote() {
    this.setState({ totalVotes: this.state.totalVotes + 1 });
  }

  componentDidMount() {
    // console.log('HOWDY');
    debugger
    fetchDogGif()
      .then((gifObj) => {
        this.setState({ gif: gifObj.data.image_url });
      })
  }

  render() {
    const breeds = this.breeds.map((breed, idx) => {
      return <DogIndexItem 
        key={`${idx}-${breed}`} 
        breed={breed} 
        addTotalVote={this.addTotalVote}
      />;
    });
    debugger
    // [<DogIndexItem />, <DogIndexItem />]
    // debugger
    // <li key={`${idx}-${breed}`} onClick={this.addTotalVote}>{breed}</li>
    // 1. bind inline <li onClick={this.addTotalVote.bind(this)}></li>
    // 2. use anonymous arrow function <li onClick={() => this.addTotalVote()}></li>
    // 3. bind in the constructor function this.addTotalVote = this.addTotalVote.bind(this);
    return (
      <div className='dog-index'>
        <h1>TOTAL DOG VOTES: {this.state.totalVotes}</h1>

        <img src={this.state.gif} />

        <ul>
          {breeds}
        </ul>
      </div>
    )
  }
}

export default DogIndex;