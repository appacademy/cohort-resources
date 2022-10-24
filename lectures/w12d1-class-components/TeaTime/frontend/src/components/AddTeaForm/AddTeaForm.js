import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea, createTea } from "../../store/teaReducer";

import React from 'react';

class AddTeaForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      flavor: '',
      price: '',
      description: ''
    }

    this.setFlavor = this.setFlavor.bind(this)
    this.setPrice = this.setPrice.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setFlavor(e) {
    this.setState({flavor: e.target.value})
  }

  setPrice(e) {
    this.setState({ price: e.target.value })
  }

  setDescription(e) {
    this.setState({ description: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    // if state had more values you didnt want o osubmit
    // const tea = {
    //   flavor: this.state.flavor,
    //   ...
    // }

    this.props.dispatch(createTea(this.state))
    this.setState({flavor: '', price: '', description: ''})
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('in component did update')
    // some value that will change
    if (prevState.flavor !== this.state.flavor) {
      console.log('flavor changing')
    }
  }

  render() {
    
    return (
      <>
        <div className="tea-form-container">
          <h2>Add a Tea</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.flavor}
              onChange={this.setFlavor}
              placeholder="Tea Flavor"
            />
            <br />
            <input
              value={this.state.price}
              onChange={this.setPrice}
              placeholder="Price"
            />
            <br />
            <input
              value={this.state.description}
              onChange={this.setDescription}
              placeholder="Description"
            />
            <br />
            <input type="submit" value="Add Tea" />
          </form>
        </div>

      </>
    )
  }
  
}

const OldAddTeaForm = props => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSubmit = e => {
    e.preventDefault();
    // debugger
    // let id = Math.floor(Math.random()*1000);
    const tea = {
      flavor: flavor,
      price: price,
      description
    };
    // good place to validate
    dispatch(createTea(tea));
    setFlavor('');
    setPrice('');
    setDescription('');
  };


  return(
    <>
      <div className="tea-form-container">
        <h2>Add a Tea</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={flavor} 
            onChange={e => setFlavor(e.target.value)}
            placeholder="Tea Flavor"
          />
          <br/>
          <input
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Price"
          />
          <br/>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
          <br/>
          <input type="submit" value="Add Tea" />
        </form>
      </div>
      
    </>
  )
};

export default AddTeaForm;