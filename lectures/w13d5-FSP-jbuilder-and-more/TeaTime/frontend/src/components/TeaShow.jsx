import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTea } from "../store/teaReducer";
import TransactionIndex from "./TransactionIndex";
import './TeaShow.css'

const TeaShow= props => {
  const {teaId} = useParams();
  const tea = useSelector(state => state.teas[teaId]);
  const dispatch = useDispatch();
  // debugger
  useEffect(() => {
    // debugger
    dispatch(fetchTea(teaId))
  }, [dispatch, teaId])

  if (!teaId || !tea) return null;
  return(
    <div className="tea-show">
      <h2>Hi I'm the Tea Show</h2>
        <div className="tea-item" key={tea.id}>
          <ul>
            <li><h3>Flavor: {tea.flavor}</h3></li>
            <li><h3>Price: {tea.price}</h3></li>
          </ul>
          <p>{tea.description}</p>
        </div>
        <TransactionIndex teaId={teaId} />
    </div>
  )
  
}

export default TeaShow;