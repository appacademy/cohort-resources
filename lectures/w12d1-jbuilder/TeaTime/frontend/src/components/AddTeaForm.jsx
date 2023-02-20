import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTea } from "../store/teaReducer"

const AddTeaForm = props => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSubmit = e => {
    e.preventDefault();
    const tea = {
      flavor: flavor,
      price: price,
      description
    };

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