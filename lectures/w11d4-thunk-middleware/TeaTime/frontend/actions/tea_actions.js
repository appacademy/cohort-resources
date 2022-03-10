export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS'
import * as TeaApiUtil from '../util/tea_api_util';


export const receiveGreenTea = {
    type: RECEIVE_TEA,
    tea: {
        flavor: 'Green',
        amount: 2.75,
        id: 1
    }
}

// Action Creator, takes payload data and sets type and payload. Returns Action Object
export const receiveTea = (tea) => {
    debugger;
    return {
        type: RECEIVE_TEA,
        tea // => tea: tea
    }
}

export const receiveAllTeas = (teas) => {
    debugger;
    return {
        type: RECEIVE_ALL_TEAS,
        teas // => teas: teas
    }
}

// A thunk action crerator, when dispatched, gets intercepted by the middleware
// The middleware recognizes it as a funciton (not an action object) and will  
// invoke it. Once invoked the fuction executes its API call and then dispatches  
// the result which goes back to the store and gets intercepted by the middleware
// again, the middleware say 'Ah, an action object', and passes the action object  
// to the reducers

export const fetchAllTeas = () => (dispatch, getState) => {
    debugger;
    return TeaApiUtil.getAllTeas()
        .then(teas => dispatch(receiveAllTeas(teas)));
}

export const createTea = (tea) => (dispatch) => {
    debugger;
    return TeaApiUtil.postTea(tea)
        .then(tea => dispatch(receiveTea(tea)))
}