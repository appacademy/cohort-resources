import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createTea, receiveTea } from '../../store/teaReducer';
import './index.css'

const TeaForm = (props) => {
    const dispatch = useDispatch();

    const [flavor, setFlavor] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // const id = Math.floor(Math.random()* 1000)
        //temporary id assignment.  Db will assign in the future

        const tea = {
            // id,
            flavor,
            price
        };

        dispatch(createTea(tea));
       
        //clear our form
        setFlavor('');
        setPrice('');
    };

    return (
        <div className='tea-form'>
            <h2>I'm the Tea Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Flavor:
                    <input value={flavor} onChange={(e)=> setFlavor(e.target.value)}/>
                </label>
                <label>Price:
                    <input value={price} onChange={(e)=> setPrice(e.target.value)}/>
                </label>
                <input type='submit' value='Add Tea'/>
            </form>
        </div>
    );
}

export default TeaForm;