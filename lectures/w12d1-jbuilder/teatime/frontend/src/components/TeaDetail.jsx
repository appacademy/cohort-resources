import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeaDetail } from "../store/teaReducer";



const TeaDetail = ({ teaId }) => {
  const tea = useSelector(state => state.teas[teaId])
  const transactions = useSelector(state => Object.values(state.transactions))
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchTeaDetail(teaId))
  }, [])

  return (
    <div className="tea-detail">
      <p>Transactions</p>
      <p>{tea.description}</p>
      {transactions.map(transaction => {
        return (
          <div>
            <div>{transaction.customer}</div>
            <div>{transaction.quantity}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TeaDetail;