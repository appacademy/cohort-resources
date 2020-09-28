import { RECEIVE_SHIRT_DETAIL } from './../actions/shirt_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_SHIRT_DETAIL:
            return {...state, ...action.shirtDetail.reviews}
        default: 
         return state
    }
}

export default reviewsReducer