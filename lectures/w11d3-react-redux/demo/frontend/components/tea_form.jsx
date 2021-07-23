import React from 'react';

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    // local state... NOT the same as the global state from the store
    this.state = {
      id: Math.floor(Math.random() * 1000000), // random number for id
      flavor: '',
      amount: ''
    }
    this.updateFlavor = this.updateFlavor.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // one of these functions will be called when someone types in either field
  updateFlavor(e) {
    this.setState({ flavor: e.target.value});
  }

  updateAmount(e) {
    this.setState({ amount: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTea(this.state) // dispatch action
    // clear the form
    this.setState({
      id: Math.floor(Math.random() * 1000000),
      flavor: '',
      amount: ''
    })
  }

  // make a form, where I can make teas, and send them to the store
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Add Teas to our shop!</h1>
        <label>Flavor 
          <input 
            type="text"
            name="flavor"
            value={this.state.flavor}
            onChange={this.updateFlavor}
          />
        </label>
        <label>Amount 
          <input 
            type="text"
            name="amount"
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