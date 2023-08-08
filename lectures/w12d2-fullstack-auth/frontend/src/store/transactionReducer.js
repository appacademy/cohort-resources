import { RECEIVE_TEA } from "./teaReducer"

// CONSTANTS
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
const REMOVE_TRANSACTIONS = 'REMOVE_TRANSACTIONS'

// ACTION CREATORS
export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  payload: transaction
})

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  payload: transactions
})

export const removeTransactions = transactionId => ({
  type: REMOVE_TRANSACTIONS,
  payload: transactionId
})

// SELECTORS
export const selectTransactionsByTeaId = function(teaId) {
  return function(state) {
    return Object.values(state.entities.transactions).filter(t => t.teaId === teaId)
  }
}

// REDUCER
const transactionReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_TEA:
      if(action.payload.transactions) {
        return action.payload.transactions
      } else {
        return {}
      }
    default:
      return state
  }
}

export default transactionReducer