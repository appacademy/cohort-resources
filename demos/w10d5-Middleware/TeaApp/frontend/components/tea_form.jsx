import React from 'react';

class TeaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flavor: "",
      description: ""
    };
    
    this.updateFlavor = this.updateFlavor.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFlavor(e) {
    this.setState({
      flavor: e.target.value
    })
  }
  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const tea = {
      flavor: this.state.flavor,
      description: this.state.description
    };
    this.props.createTea(tea);
    this.setState({
      flavor: "",
      description: "",
    })
  }

  render() {
    return (
      <div>
        <h2>Reali-Tea</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Flavor: 
              <input 
                type="text" 
                onChange={this.updateFlavor} 
                value={this.state.flavor}
              />
          </label>
          <br/>
          <label>Description: 
              <input 
                type="text" 
                onChange={this.updateDescription} 
                value={this.state.description}
              />
          </label>
          <br/>
          <input type="submit" value="Add Tea"/>
        </form>
      </div>
    )
  }
}

export default TeaForm