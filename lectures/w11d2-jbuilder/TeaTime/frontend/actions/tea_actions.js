import * as TeaAPIUtil from '../utils/tea_utils';

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_TEAS = 'RECEIVE_TEAS';


// NORMAL action creators
export const receiveTea = (teaPayload) => {
    return {
        type: RECEIVE_TEA,
        tea: teaPayload
    }
}

export const receiveTeas = (teas) => {
    return {
        type: RECEIVE_TEAS,
        teas: teas
    }
}


// thunk action creator
// thunk action === function
export const fetchAllTeas = () => (dispatch, getState) => (
    TeaAPIUtil.fetchTeas().then(teas => dispatch(receiveTeas(teas)))
)

export const createTea2 = (tea) => (dispatch) => {
    return TeaAPIUtil.createTea(tea).then(tea => dispatch(receiveTea(tea)));
}
