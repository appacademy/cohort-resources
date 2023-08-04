import { useSelector } from "react-redux"
import './TeaIndex.css'
import { selectAllTeas } from "../../store/teaReducer"
import TeaDetail from "../TeaDetail/TeaDetail"

const TeaIndex = props => {
  // reduxn uses === to check for equality of 'teas' variable whenever state updates
  const teas = useSelector(selectAllTeas)
  
  // const teasArray = Object.values(teas)

  return (
    <>
      <h2>Tea Index</h2>
      {Object.values(teas).map(tea => (
        <ul key={tea.id} className="tea-list">
          <TeaDetail tea={tea} />
        </ul>
      ))}
    </>
  )
}

export default TeaIndex