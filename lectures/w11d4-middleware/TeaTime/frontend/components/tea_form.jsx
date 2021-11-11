import React from 'react'; 

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        flavor: "",
        cost: "", 
        // id: 1 Rails will create the ID for us (When creating a new tea)
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFlavor = this.updateFlavor.bind(this);
    this.updateCost = this.updateCost.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let tea = this.state;
    this.props.createTea(tea);
    this.setState({
        flavor: "", 
        cost: "", 
        // id: this.state.id + 1
    });
  }

  updateFlavor(e) {
    this.setState({
      flavor: e.target.value
    });
  }

  updateCost(e) {
    this.setState({
      cost: e.target.value
    });
  }
  
  render() {
    return (
      <>
        <h1>Create a new Tea</h1>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="flavor-input">Flavor</label>
          <input id="flavor-input" type="text" onChange={this.updateFlavor} value={this.state.flavor} />

          <label htmlFor="cost-input">Cost</label>
          <input id="cost-input" type="text" onChange={this.updateCost} value={this.state.cost} />

          <input type="submit" value="SUBMIT"/>
        </form>
      </>
    );
  }
}

export default TeaForm;