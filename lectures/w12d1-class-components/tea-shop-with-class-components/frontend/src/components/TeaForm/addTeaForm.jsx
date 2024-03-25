import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTea, receiveTea } from '../../store/teaReducer';

const AddTeaForm = props => {
  const dispatch = useDispatch();

  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const teaObject = {
      flavor: flavor,
      price: price
    }

    dispatch(createTea(teaObject));

    setFlavor("");
    setPrice("");
  }

  return (
    <div className='tea-form'>
      <h2>Hi from the add tea form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="flavor">Flavor: </label>
        <input 
          type="text"
          id="flavor"
          value={flavor}
          onChange={e => setFlavor(e.target.value)}
          />

          <label htmlFor="price">Price: </label>
          <input 
            type="text"
            id="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            />

            <input type="submit" value="Add Tea"/>
      </form>
    </div>
  )
}

export default AddTeaForm;