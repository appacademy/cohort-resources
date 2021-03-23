import React from 'react';

class DogIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogVoteCount: 0
    };

    this.addDogVote = this.addDogVote.bind(this);
  }

  addDogVote() {
    this.props.addTotalVote();
    this.setState({ dogVoteCount: this.state.dogVoteCount + 1});
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3 onClick={this.addDogVote}>{this.props.breed}: {this.state.dogVoteCount}</h3>
      </div>
    )
  }
}

export default DogIndexItem;