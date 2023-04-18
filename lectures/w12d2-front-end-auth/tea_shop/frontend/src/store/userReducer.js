import { csrfFetch } from "./csrf";


// Action Types 
const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

// Action creators 

export const receiveUser = user =>({
    type: RECEIVE_USER,
    payload: user
})


export const removeUser = userId => ({
    type: REMOVE_USER,
    userId
})


// Thunk action creator

export const loginUser = user => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    debugger
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user))
}

export const logoutUser = userId => async dispatch=>{
    let res = await csrfFetch('/api/session', {
        method: "DELETE"
    });
    sessionStorage.setItem('currentUser', null);
    dispatch(removeUser(userId));
}




const usersReducer = (state = {}, action) =>{

    const nextState = {...state}


    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case  REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
            default: 
            return state;
    }

}

export default usersReducer;