import './TeaDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTea, removeTea } from '../../store/teasReducer'
import { useState } from 'react'
import { selectTransactionsByTeaId } from '../../store/transactionsReducer'

const TeaDetail = ({ tea }) => {
  const dispatch = useDispatch()
  const teaTransactions = useSelector(selectTransactionsByTeaId(tea.id))
  const [showMore, setShowMore] = useState(false)

  const handleClick = e => {
    if(!showMore) {
      dispatch(fetchTea(tea.id))
        .then(() => setShowMore(prev => !prev))
    } else {
      setShowMore(prev => !prev)
    }
  }
  return (
    <li className={`tea-detail ${showMore ? 'show' : 'hide'}`} onClick={handleClick}>
      <h3>Flavor: {tea.flavor}</h3>
      <p>Price: ${tea.price}</p>
      <p>Amount: {tea.amount}</p>
      {showMore && (
        <>
          <p>Description: {tea.description}</p>
          <div className='transactions'>
            <p>Transactions:</p>
            <ul className='tea-transactions'>
              {teaTransactions.map(t => (
                <li key={t.id} className='transaction-item'>
                  <div>Customer: {t.customer}</div>
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