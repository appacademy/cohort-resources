import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTea, receiveTea } from "../../store/teaReducer";
import { postTea } from "../../util/tea_api_util";

const AddTeaForm = (props) => {
  const dispatch = useDispatch();

  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const teaData = {
      flavor: flavor,
      price: price
    };

    dispatch(createTea(teaData));

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