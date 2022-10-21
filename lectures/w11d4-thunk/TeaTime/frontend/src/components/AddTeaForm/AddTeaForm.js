import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea, createTea } from "../../store/teaReducer";

const AddTeaForm = props => {
  console.log('rendering');
  const dispatch = useDispatch();
  
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    debugger
    let id = Math.floor(Math.random()*1000);
    const tea = {
      id: id,
      flavor: flavor,
      price: price
    };
    // good place to validate
    dispatch(createTea(tea));
    setFlavor('');
    setPrice('');
  };

  return(
    <div className="tea-form">
      <h2>I'm the AddTeaForm</h2>
      <form onSubmit={handleSubmit}>
        <label for="flavor">Flavor:</label>
        <input
          id="flavor"
          value={flavor} 
          onChange={e => setFlavor(e.target.value)}
        />
        <label for="price">Price:</label>
        <input
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input type="submit" value="Add Tea" />
      </form>
    </div>
  )
};

export default AddTeaForm;