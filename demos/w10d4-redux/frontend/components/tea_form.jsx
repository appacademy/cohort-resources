import React from 'react';

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      amount: 0,
      id: 3
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({type: e.target.value});
  }

  handleAmount(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTea(this.state);
    this.setState({
      type: "",
      amount: 0,
      id: this.state.id + 1
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add Tea</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type:
            <input 
              onChange={this.handleChange}
              type="text"
              value={this.state.type}
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