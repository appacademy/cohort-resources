// CONSTANTS
const RECEIVE_USER = 'RECEIVE_USER'
const REMOVE_USER = 'REMOVE_USER'

// ACTION CREATORS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
})

export const removeUser = userId => ({
  type: REMOVE_USER,
  payload: userId
})

// SELECTORS

// REDUCER

const userReducer = (state = {}, action) => {
  const nextState = { ...state }

  switch(action.type) {
    case RECEIVE_USER:
      nextState[action.payload.id] = action.payload
      return nextState
    case REMOVE_USER:
      delete nextState[action.payload]
      return nextState
    default:
      return state
  }
}

export default userReducer