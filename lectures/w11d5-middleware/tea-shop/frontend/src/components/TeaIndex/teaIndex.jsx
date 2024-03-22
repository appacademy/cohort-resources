import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './teaIndex.css'
import { destroyTea, fetchTeas, selectAllTeas } from '../../store/teaReducer';

const TeaIndex = props => {
  const dispatch = useDispatch();
  // React uses object comparision when deciding whether `teas` has changed
  const teas = useSelector(selectAllTeas);

  useEffect(() => {
    dispatch(fetchTeas());
  }, []);

  return (
    <div className='tea-index'>
      <h4>Hello from the tea index component</h4>

      {teas.map(tea => (
        <div className='tea-index-item' key={tea.id}>
          <ul>
            <li>
              <h4>
                Flavor: {tea.flavor}
              </h4>
            </li>
            <li>
              <h4>
                Price: {tea.price}
              </h4>
            </li>
            <li onClick={() => dispatch(destroyTea(tea.id))}>Delete Tea</li>
          </ul>
        </div>
      ))}

    </div>
  )
}

export default TeaIndex;