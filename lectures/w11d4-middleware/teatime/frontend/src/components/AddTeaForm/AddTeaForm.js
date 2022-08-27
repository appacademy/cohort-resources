import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea, createTea } from "../../store/teaReducer";

const AddTeaForm = props => {
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
    <>
      <h2>I'm the AddTeaForm</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={flavor} 
          onChange={e => setFlavor(e.target.value)}
        />
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input type="submit" value="Add Tea" />
      </form>
    </>
  )
};

export default AddTeaForm;