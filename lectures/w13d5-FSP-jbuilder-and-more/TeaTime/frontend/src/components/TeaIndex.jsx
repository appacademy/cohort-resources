import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeas } from "../store/teaReducer";
import { Link } from "react-router-dom";
import { openModal } from "../store/modalReducer";
import './TeaIndex.css'

const TeaIndex = props => {
  const teas = useSelector(state => state.teas)
  const teaArray = Object.values(teas)
  const dispatch = useDispatch();
  // debugger
  useEffect(() => {
    // debugger
    dispatch(fetchTeas())
  }, [dispatch])

  return(
    <div className="tea-index">
      <h2>Hi I'm the Tea Index</h2>
      <button className="tea-button" onClick={() => dispatch(openModal('form'))}>Create New Tea</button>
      {teaArray.map((tea) => { 
        return (
          <div className="tea-item" key={tea.id}>
            <ul>
              <li><Link to={`/teas/${tea.id}`} className="link">Flavor: {tea.flavor}</Link></li>
              <li><h3>Price: {tea.price}</h3></li>
              <li><h3>Likes: {tea.numLikes}</h3></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
  
}

export default TeaIndex;