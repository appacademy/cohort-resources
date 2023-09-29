import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeas } from "../store/teaReducer";
import './TeaIndex.css'

const TeaIndex = props => {
  const teas = useSelector(state => state.teas)
  const teaArray = Object.values(teas)
  const dispatch = useDispatch();
  // debugger
  useEffect(() => {
    // debugger
    dispatch(fetchTeas())
  }, [])

  return(
    <div className="tea-index">
      <h2>Hi I'm the Tea Index</h2>
      {teaArray.map((tea) => { // need to explicit return
        // tea === {id: 1, flavor: 'green', price: 4.3}
        return (
          <div className="tea-item" key={tea.id}>
            <ul>
              <li><h3>Flavor: {tea.flavor}</h3></li>
              <li><h3>Price: {tea.price}</h3></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
  
}

export default TeaIndex;