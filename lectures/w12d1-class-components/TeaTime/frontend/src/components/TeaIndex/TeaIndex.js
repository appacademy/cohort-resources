import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeas } from '../../store/teaReducer';
import TeaIndexItem from '../TeaIndexItem';

const TeaIndex = props => {
  const teas = useSelector(state => Object.values(state.teas));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTeas())
  }, []);
  return(
    <>
      <div className='tea-index-container'>
        <h2>Teas</h2>
        <ul className='teas-ul'>
        {teas.map(tea => (
          <TeaIndexItem tea={tea}/>
        ))}
        </ul>
      </div>
      
    </>
  )
};

export default TeaIndex;