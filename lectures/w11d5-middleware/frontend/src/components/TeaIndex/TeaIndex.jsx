import { useDispatch, useSelector } from "react-redux"
import './TeaIndex.css'
import { fetchTeas, selectAllTeas } from "../../store/teaReducer"
import TeaDetail from "../TeaDetail/TeaDetail"
import { useEffect } from "react"

const TeaIndex = props => {
  // reduxn uses === to check for equality of 'teas' variable whenever state updates
  const dispatch = useDispatch()
  const teas = useSelector(selectAllTeas)
  
  // const teasArray = Object.values(teas)

  useEffect(() => {
    dispatch(fetchTeas())
  },[])

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