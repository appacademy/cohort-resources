import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeaDetail } from "../store/teaReducer";



const TeaDetail = ({ teaId }) => {
  const tea = useSelector(state => state.teas[teaId])
  // const transactions = useSelector( state => Object.values(state.transactions))
  const selector = state => {
    let ids = [];
    if(tea.transactionIds !== undefined){
      ids = tea.transactionIds
    }
    return ids.map(tId => state.transactions[tId])
  }

  const transactions = useSelector(selector)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchTeaDetail(teaId))
  }, [teaId, dispatch])

  return (
    <div className="tea-detail">
      <h3>{tea.description}</h3>
      <p>Transactions</p>
      <ul>
        {transactions.map(transaction => {
          return (
            <div className="transaction" key={transaction.id}>
                <ul>
                    <li>user: {transaction.customer}</li>
                    <li>q: {transaction.quantity}</li>
                    <li>$ {transaction.quantity * tea.price}</li>
                </ul>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaDetail;