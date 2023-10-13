import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { receiveTea, postTea } from '../store/teaReducer';
import './TeaForm.css'

const TeaForm = props => {
  const dispatch = useDispatch();

  // still have local state variables for forms
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const tea = {
      flavor: flavor,
      price: price
    };

    dispatch(postTea(tea));

    setFlavor('');
    setPrice('');
  }

  return (
    <div className="tea-form">
      <h2>Hi I'm the Tea Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Flavor: 
          <input type="text" value={flavor} 
            onChange={e => setFlavor(e.target.value)} />
        </label>
          <br />
        <label>Price: 
          <input type="text" value={price} 
            onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Add Tea" />
      </form>
    </div>
  )
}

export default TeaForm;