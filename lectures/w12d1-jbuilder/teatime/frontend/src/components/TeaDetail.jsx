import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeaDetail } from "../store/teaReducer";



const TeaDetail = ({ teaId }) => {
  const tea = useSelector(state => state.teas[teaId])

  const selector = (state) => {
    let ids = [];
    if(tea.transactionIds !== undefined){
      ids = tea.transactionIds
    }
    return ids.map(id => state.transactions[id])
  }

  // const transactions = useSelector(state => Object.values(state.transactionstate => Object.values(state.transactions))
  const transactions = useSelector(selector)
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
            <div>Customer: {transaction.customer}</div>
            <div>Quantity: {transaction.quantity}</div>
            <div>Total: {tea.price * transaction.quantity}</div>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default TeaDetail;