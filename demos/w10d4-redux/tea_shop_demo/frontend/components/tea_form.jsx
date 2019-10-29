import React from 'react';

class TeaForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      flavor: "",
      amount: "",
    };
    this.updateFlavor = this.updateFlavor.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFlavor(e) {
    // debugger;
    this.setState({
      flavor: e.target.value
    });
  }

  updateAmount(e) {
    // put debugger here to check
    this.setState({
      amount: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTea(this.state);
  }

  render() {
    // debugger;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Tea</h3>
        <label>Flavor:
          <input 
            onChange={this.updateFlavor} 
            type="text" 
            value={this.state.flavor}
          />
        </label>
        <label>Amount:
          <input 
            onChange={this.updateAmount}
            type="text" 
            value={this.state.amount}
          />
        </label>
        <input type="submit" value="Add Tea"/>
      </form>
    );
  }
}

export default TeaForm;