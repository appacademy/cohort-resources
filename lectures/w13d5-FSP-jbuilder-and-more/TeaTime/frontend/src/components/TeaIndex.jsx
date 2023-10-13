import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeas } from "../store/teaReducer";
import { Link } from "react-router-dom";
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
      {teaArray.map((tea) => { // need to explicit return
        // tea === {id: 1, flavor: 'green', price: 4.3}
        return (
          <div className="tea-item" key={tea.id}>
            <ul>
              <li><Link to={`/teas/${tea.id}`} className="link">Flavor: {tea.flavor}</Link></li>
              <li><h3>Price: {tea.price}</h3></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
  
}

export default TeaIndex;