import React, { Component } from 'react'

class TeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: Math.floor(Math.random() * 1000000),
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
    debugger; 
    e.preventDefault();

    this.props.createTea(this.state); 
    // Use Promise.resolve so we can chain `.then` on, won't need to worry about 
    // doing this once we get a back-end and involve and use `$.ajax` which 
    // returns a `thenable` (promise-like) object
    // Promise.resolve()
    //   .then(() => this.props.receiveTea(this.state))
    //   .then(() => {
    //     this.setState({
    //       id: Math.floor(Math.random() * 1000000),
    //       type: '',
    //       amount: ''
    //     });
    //   })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add Tea</h1>
        <label>Type
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
