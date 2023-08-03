import { useDispatch, useSelector } from "react-redux"
import './TeaIndex.css'
import { removeTea, selectAllTeas } from "../../store/teaReducer"

const TeaIndex = props => {
  const teas = useSelector(selectAllTeas)
  const dispatch = useDispatch()
  
  return (
    <>
      <h2>Tea Index</h2>
      {teas.map(tea => (
        <ul key={tea.id} className="tea-list">
          <li>
            <h3>Flavor: {tea.flavor}</h3>
          </li>
          <li>
            <p>Price: ${tea.price}</p>
          </li>
          <li>
            <button onClick={e => dispatch(removeTea(tea.id))}>Delete Tea</button>
          </li>
        </ul>
      ))}
    </>
  )
}

export default TeaIndex