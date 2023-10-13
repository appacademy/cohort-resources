import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../store/transactionReducer";
import './TransactionIndex.css'

const TransactionIndex = props => {
  const transactions = useSelector(state => state.transactions)
  const transArray = Object.values(transactions)
  const dispatch = useDispatch();
  // debugger
  useEffect(() => {
    // debugger
    dispatch(fetchTransactions(props.teaId));
  }, [dispatch, props.teaId])

  return(
    <div className="transaction-index">
      <h2>Hi I'm the Transactions Index</h2>
      {transArray.map((transaction) => {
        return (
          <div className="transaction-item" key={transaction.id}>
            <ul>
              <li><h3>User: {transaction.username}</h3></li>
              <li><h3>Quantity: {transaction.quantity}</h3></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
  
}

export default TransactionIndex;