import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTeaDetail } from "../store/teaReducer";

const TeaDetail = ({id}) => {
  
  const tea = useSelector(state => state.teas[id]);

  const selector = (state) => {
    let ids = [];
    if (tea.transactionIds !== undefined) {
      ids = tea.transactionIds
    }
    return ids.map(tId => state.transactions[tId])
  }
  const transactions = useSelector(selector);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeaDetail(id))
  },[])

  return (
    <div className="tea-detail">
      <h4>{tea.description}</h4>
      <p>Transactions</p>
      <ul>
        {transactions.map(transaction => {
          return (
            <div className="transaction" key={transaction.id}>
              <div>user: {transaction.username}</div>
              <div>{transaction.quantity}</div>
              <div>${transaction.quantity * tea.price}</div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaDetail;