import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { fetchTeas, selectAllTeas } from '../../store/teaReducer';
import { useEffect } from 'react';

const TeaIndex = (props) => {
    const teas = useSelector(selectAllTeas);
    const dispatch = useDispatch();

    // a component should always fetch the information it needs (unless it's receiving them via props)
    useEffect(() => {
        dispatch(fetchTeas());
    }, []);

    const generateTeas = () => {
        return teas.map((tea, idx) => (
            <div className='tea-index-item' key={idx}>
                <ul>
                    <li>
                        <h4>Flavor: {tea.flavor}</h4>
                    </li>
                    <li>
                        <h4>Price: {tea.price}</h4>
                    </li>
                </ul>
            </div>
        ));
    };

    return (
        <div className='tea-index'>
            <h2>I'm the Tea Index</h2>
            {generateTeas()}
        </div>
    );
};

export default TeaIndex;