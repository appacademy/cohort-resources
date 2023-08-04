// CONSTANTS
const RECEIVE_TEA = 'RECEIVE_TEA'
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA'

// ACTION CREATORS
export const receiveTea = tea => ({
  type: RECEIVE_TEA,
  payload: tea
})

// be careful - teas parameter could be an array or object
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  payload: teas
})

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  payload: teaId
})

// SELECTORS
export const selectAllTeas = state => state.teas

// REDUCER
const teaReducer = (state = {}, action) => {
  const nextState = { ...state }

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.payload.id] = action.payload
      return nextState
    case RECEIVE_TEAS:
      // if action.payload is an array of tea objects
      // action.payload.forEach(tea => {
      //   nextState[tea.id] = tea
      // })
      // return nextState
      // if action.payload is an object of tea objects
      return Object.assign(nextState, action.payload)
    case REMOVE_TEA:
      delete nextState[action.payload]
      return nextState
    default:
      return state
  }
}

export default teaReducer;