import { useState } from "react"
import './TeaForm.css'
import { useDispatch, useSelector } from "react-redux"
import { receiveTea } from "../../store/teaReducer";

const TeaForm = props => {
  const currentUser = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch()

  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const tea = {
      id: Math.floor(Math.random()*1000),
      flavor,
      price,
      amount
    }
    dispatch(receiveTea(tea))
    setFlavor('')
    setPrice('')
    setAmount('')
  }

  return (
    <>
      <h2>Tea Form</h2>
      <form className='tea-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="flavor">Flavor:</label>
          <input
            id="flavor"
            type="text" 
            value={flavor} 
            onChange={e => setFlavor(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <input type="submit" value={'Create Tea'} disabled={currentUser ? false : true}/>
        {/* <button>Create Tea</button> */}
      </form>
    </>
  )
}

export default TeaForm