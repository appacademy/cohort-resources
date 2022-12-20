import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeas } from "../store/teaReducer";

const TeaIndex = props => {
  const teas = useSelector(state => Object.values(state.teas));
  
  // const userTeas = useSelector(state =>{
  //   state.teas.filter((tea)=> tea.userId === currentUserId )
  // })
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchAllTeas())
  }, [])

  // console.log('rendering');
  return(
    <div className="tea-index">
      <h2>Hi I'm the TeaIndex</h2>
      {teas.map(tea => (
        <div key={tea.id}>
          <ul>
            <li>
              <h4>Flavor: {tea.flavor}</h4>
            </li>
            <li>
              <p>Price: {tea.price}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
};

export default TeaIndex;