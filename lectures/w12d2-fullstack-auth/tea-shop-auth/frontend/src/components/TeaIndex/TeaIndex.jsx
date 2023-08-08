import { useDispatch, useSelector } from "react-redux"
import './TeaIndex.css'
import { fetchTeas, selectAllTeas } from "../../store/teasReducer"
import TeaDetail from "../TeaDetail/TeaDetail"
import { useEffect } from "react"

const TeaIndex = props => {
  const teas = useSelector(selectAllTeas)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchTeas())
  },[dispatch])

  return (
    <>
      {Object.values(teas).map(tea => (
        <ul key={tea.id} className="tea-list">
          <TeaDetail tea={tea} />
        </ul>
      ))}
    </>
  )
}

export default TeaIndex