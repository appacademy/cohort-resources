import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea, createTea } from "../../store/teaReducer";

class AddTeaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flavor: '',
      price: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('TeaForm did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('TeaForm did upate');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(createTea(this.state));
    this.setState({ flavor: '', price: '', description: '' });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return(
      <>
        <div className="tea-form-container">
          <h2>Add a Tea</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.flavor}
              onChange={this.handleChange('flavor')}
              placeholder="Tea Flavor"
            />
            <br />
            <input
              value={this.state.price}
              onChange={this.handleChange('price')}
              placeholder="Price"
            />
            <br />
            <input
              value={this.state.description}
              onChange={this.handleChange('description')}
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

// const AddTeaForm = props => {
//   const dispatch = useDispatch();
//   const [flavor, setFlavor] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');

  
//   const handleSubmit = e => {
//     e.preventDefault();
//     // debugger
//     // let id = Math.floor(Math.random()*1000);
//     const tea = {
//       flavor: flavor,
//       price: price,
//       description
//     };
//     // good place to validate
//     dispatch(createTea(tea));
//     setFlavor('');
//     setPrice('');
//     setDescription('');
//   };


//   return(
    // <>
    //   <div className="tea-form-container">
    //     <h2>Add a Tea</h2>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         value={flavor} 
    //         onChange={e => setFlavor(e.target.value)}
    //         placeholder="Tea Flavor"
    //       />
    //       <br/>
    //       <input
    //         value={price}
    //         onChange={e => setPrice(e.target.value)}
    //         placeholder="Price"
    //       />
    //       <br/>
    //       <input
    //         value={description}
    //         onChange={e => setDescription(e.target.value)}
    //         placeholder="Description"
    //       />
    //       <br/>
    //       <input type="submit" value="Add Tea" />
    //     </form>
    //   </div>
      
    // </>
//   )
// };

export default AddTeaForm;