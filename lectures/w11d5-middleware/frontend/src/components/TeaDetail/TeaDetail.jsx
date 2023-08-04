import './TeaDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeTea } from '../../store/teaReducer'
import { useState } from 'react'
import { selectTransactionsByTeaId } from '../../store/transactionReducer'

const TeaDetail = ({ tea }) => {
  const dispatch = useDispatch()
  const teaTransactions = useSelector(selectTransactionsByTeaId(tea.id))
  const [showMore, setShowMore] = useState(false)

  const handleClick = e => {
    setShowMore(prev => !prev)
  }
  return (
    <li className='tea-detail' onClick={handleClick}>
      <h3>Flavor: {tea.flavor}</h3>
      <p>Price: {tea.price}</p>
      <p>Amount: {tea.amount}</p>
      {showMore && (
        <>
          <p>Description: {tea.description}</p>
          <div className='transactions'>
            <p>Transactions:</p>
            <ul className='tea-transactions'>
              {teaTransactions.map(t => (
                <li key={t.id} className='transaction-item'>
                  <div>User ID: {t.userId}</div>
                  <div>Quantity: {t.quantity}</div>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={e => dispatch(removeTea(tea.id))}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TeaDetail

  // < li >
  // <h3>Flavor: {tea.flavor}</h3>
  //         </li >
  //         <li>
  //           <p>Price: ${tea.price}</p>
  //         </li>
  //         <li>
  //           <button onClick={e => dispatch(removeTea(tea.id))}>Delete Tea</button>
  //         </li>