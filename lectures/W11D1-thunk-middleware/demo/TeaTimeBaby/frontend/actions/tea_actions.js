import { fetchAllTeas } from '../utils/teas_api_util';
import * as TeaAPIUtil from '../utils/teas_api_util';
export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_TEAS = 'RECEIVE_TEAS';

// not dynamic
export const receiveHojiCha = {
    type: RECEIVE_TEA,
    tea: { flavor: 'hoji cha', amount: 5, id: 1 } // <= payload
};

// more dynamic
// ACTION CREATOR => creates actions
// normal actions === POJOs
export const receiveTea = (tea) => {
    return {
        type: RECEIVE_TEA,
        tea // same as tea: tea
    }
}

export const receiveTeas = (teas) => {
    return {
        type: RECEIVE_TEAS,
        teas // same as tea: tea
    }
}

// THUNK ACTION CREATORS => create THUNK ACTIONS (THUNKTIONS)
// Thunk action === function

export const requestAllTeas = () => (dispatch) => {
    return fetchAllTeas()
        .then(teas => dispatch(receiveTeas(teas)))
}

export const buildTea = (tea) => (dispatch) => {
    return TeaAPIUtil.createTea(tea)
        .then(tea => dispatch(receiveTea(tea)))
}