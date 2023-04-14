import { useSelector } from 'react-redux';
import './index.css'
import { selectAllTeas } from '../../store/teaReducer';

const TeaIndex = (props) => {
    const teas = useSelector(selectAllTeas);

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