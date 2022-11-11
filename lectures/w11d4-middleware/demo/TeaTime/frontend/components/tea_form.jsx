import React, { Component } from 'react'

class TeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000000),
      flavor: '',
      amount: ''
    }

    this.updateAmount = this.updateAmount.bind(this);
    this.updateFlavor = this.updateFlavor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFlavor(e) {
    this.setState({ flavor: e.target.value });
  }

  updateAmount(e) {
    this.setState({ amount: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.receiveTea(this.state) // this will only update our redux state
    this.props.makeTea2(this.state) // this will update our db AND redux state
    this.setState({
      id: Math.floor(Math.random() * 1000000),
      flavor: '',
      amount: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add Tea</h1>
        <label>Flavor
          <input
            type="text"
            value={this.state.flavor}
            onChange={this.updateFlavor}
          />
        </label>
        <label>Amount
          <input
            type="text"
            value={this.state.amount}
            onChange={this.updateAmount}
          />
        </label>
        <input type="submit" value="Add Tea" />
      </form>
    )
  }
}

export default TeaForm;