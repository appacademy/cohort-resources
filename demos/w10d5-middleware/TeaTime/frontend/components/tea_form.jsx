import React from 'react';

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: "",
      amount: 0,
    };
    this.handleFlavor = this.handleFlavor.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFlavor(e) {
    this.setState({flavor: e.target.value});
  }

  handleAmount(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTea(this.state);
    this.setState({
      flavor: "",
      amount: 0,
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Add Tea</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Flavor:
            <input 
              onChange={this.handleFlavor}
              type="text"
              value={this.state.flavor}
            />
          </label>
          <label>
            Amount:
            <input 
              onChange={this.handleAmount}
              type="text"
              value={this.state.amount}
            />
          </label>
          <input type="submit" value="Add Tea" />
        </form>
      </div>
    );
  }
}

export default TeaForm;