// CONSTANTS
const RECEIVE_LIKE = 'RECEIVE_LIKE'
const RECEIVE_LIKES = 'RECEIVE_LIKES'
const REMOVE_LIKES = 'REMOVE_LIKES'

// ACTION CREATORS
export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  payload: like
})

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  payload: likes
})

export const removeLikes = likeId => ({
  type: REMOVE_LIKES,
  payload: likeId
})

// SELECTORS


// REDUCER
const likesReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    default:
      return state
  }
}

export default likesReducer