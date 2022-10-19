import { useState } from "react";
import { useDispatch } from "react-redux";
import {receiveTea} from "../../store/teasReducer"

const TeaForm = props => {

    // We can only make updates to the redux store by dispatching actions, the useDispatch hook is what allows us to do this directly from our functional component. It's return value is the dispatch function ready to be invoked with an action. Therefore, we save it to a constant that we can invoke later.

    const dispatch = useDispatch();

    // We will need two slices of local state for the flavor and price to be updated with user input
    const [flavor, setFlavor] = useState('');
    const [price, setPrice] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        //we need a way to generate IDs because we don't have a backend or database yet.
        let id = Math.floor(Math.random()*1000);

        const tea = {
            id: id,
            flavor: flavor, //value refers to local state
            price: price //value refers to local state
        };
        // good place to validate

        // once our object is done, it is ready to be dispatched
        dispatch(receiveTea(tea));

        //finally, we clean our form
        setFlavor('');
        setPrice('');
    };

    return(
        <div className="tea-form">
            <h2>I'm the TeaForm</h2>
                <form onSubmit={handleSubmit}>
                    <label>Flavor:
                        <input
                            value={flavor} 
                            onChange={e => setFlavor(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>Price:
                        <input
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </label>
                    
                    <input type="submit" value="Add Tea" />
                </form>
        </div>
    )
};

export default TeaForm;