import React from 'react';

class TeaForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: Math.floor(Math.random() * 1000000),
      flavor: '',
      amount: '',
    };

    this.updateFlavor = this.updateFlavor.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // We get the event keyword for free!
  updateFlavor() {
    this.setState({
      flavor: event.target.value
    });
  }

  // If we want to use 'e', we must pass it in
  updateAmount(e) {
    this.setState({
      amount: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createTea(this.state)
    this.setState({
      id: Math.floor(Math.random() * 1000000),
      flavor: '',
      amount: ''
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h4>Tea Form</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Flavor:
            <input
              type='text'
              value={this.state.flavor}
              onChange={this.updateFlavor}
            />
          </label>
          <br /> <br />
          <label>
            Amount:
            <input
              type='text'
              value={this.state.amount}
              onChange={this.updateAmount}
            />
          </label>
          <br /><br />
          <input type='submit' value='Add Tea' />
        </form>
      </div>
    );
  }
};

export default TeaForm;