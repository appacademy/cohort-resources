import { useDispatch } from "react-redux"
import { useState } from "react";
import { receiveTea } from "../../store/teaReducer";


const TeaForm = props => {

  const dispatch = useDispatch();

  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let id = Math.floor(Math.random()*1000);

    // we'll get there
    const tea = {
      id: id,
      flavor: flavor,
      price: price
    };

    dispatch(receiveTea(tea));

    setFlavor('');
    setPrice('');
    
  }

  return (
    <div className="tea-form">
      <h2>I'm a little TeaForm</h2>
      <form onSubmit={handleSubmit}>
        <label>Flavor: 
          <input type="text" value={flavor}
          onChange={e => setFlavor(e.target.value)} />
        </label>
        <label> Price: 
          <input type="text" value={price}
            onChange={e => setPrice(e.target.value)} />
        </label>
        <input type="submit" value="Add Tea" />
      </form>
    </div>
  )
  
}

export default TeaForm;