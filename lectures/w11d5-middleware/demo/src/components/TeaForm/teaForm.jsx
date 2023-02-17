import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea } from "../../store/teaReducer";

const AddTeaForm = (props) => {
  const dispatch = useDispatch();

  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);

    const tea = {
      id: id,
      flavor: flavor,
      price: price
    };

    dispatch(receiveTea(tea));

    setFlavor("");
    setPrice("");
  };

  return(
    <>
      <h2>Add a Tea:</h2>
      <form onSubmit={handleSubmit}>
        <label>Flavor
          <input
            type="text"
            value={flavor}
            onChange={e => setFlavor(e.target.value)}
          />
        </label>
        <br />
        <label>Price
          <input
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <input type="submit" value="Add Tea" />
      </form>
    </>
  );
};

export default AddTeaForm;