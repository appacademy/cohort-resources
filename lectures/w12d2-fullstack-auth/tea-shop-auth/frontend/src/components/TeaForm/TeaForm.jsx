import { useState } from "react"
import './TeaForm.css'
import { useDispatch, useSelector } from "react-redux"
import { createTea, receiveTea } from "../../store/teaReducer";

const TeaForm = props => {
  const currentUser = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch()

  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const tea = {
      flavor,
      price,
      amount,
      description
    }
    dispatch(createTea(tea))
    setFlavor('')
    setPrice('')
    setAmount('')
    setDescription('')
  }

  return (
    <div className="tea-form-wrapper">
      <h2>Tea Form</h2>
      <form className='tea-form' onSubmit={handleSubmit}>
        <input
          id="flavor"
          type="text" 
          value={flavor} 
          onChange={e => setFlavor(e.target.value)}
          placeholder="Flavor"
        />
        <input
          id="price"
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input type="submit" value={'Create Tea'} disabled={currentUser ? false : true}/>
      </form>
    </div>
  )
}

export default TeaForm