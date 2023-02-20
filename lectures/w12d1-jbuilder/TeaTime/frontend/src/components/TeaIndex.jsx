import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeas, selectTeas } from '../store/teaReducer';
import TeaIndexItem from './TeaIndexItem';

function TeaIndex(){
  debugger
  const teas = useSelector(selectTeas);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger
    dispatch(fetchAllTeas())
  }, [dispatch]);
  return(
    <>
      <div className='tea-index-container'>
        <h2>Teas</h2>
        <ul className='teas-ul'>
        {teas.map(tea => (
          <TeaIndexItem key={tea.id} tea={tea}/>
        ))}
        </ul>
      </div>
      
    </>
  )
};

export default TeaIndex;