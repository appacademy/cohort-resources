import React from 'react';

class ShirtForm extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      style: '',
      price: '',
      id: Math.floor(Math.random() * 1000000)
    }

    this.updatePrice = this.updatePrice.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updatePrice() {
    this.setState({ price: event.target.value })
  }


  updateStyle(e) {
    this.setState({ style: e.target.value });
  }

  // this.state looks juist like a shirt object
  handleSubmit(e) {
    e.preventDefault();
    this.props.addShirt(this.state)
    this.setState({
      style: '',
      price: '',
      id: Math.floor(Math.random() * 1000000),
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Complete to Add a Shirt</h4>
        <label>
          Style:
          <input
            type='text'
            value={this.state.style}
            onChange={this.updateStyle}
          />
        </label>

        <label>
          Price:
          <input
            type='text'
            value={this.state.price}
            onChange={this.updatePrice}
          />
        </label>
        <input type='submit' value='Add Shirt' />
      </form>
    );
  }
};

export default ShirtForm;