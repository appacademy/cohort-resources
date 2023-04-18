import { postTea, requestTeas } from "../utils/tea_api_util";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';

// REGULAR ACTION CREATORS
export const receiveTea = tea => ({
    type: RECEIVE_TEA,
    tea
});

export const receiveTeaDetail = payload =>{
    return {
        type: RECEIVE_TEA_DETAIL,
        payload
    }
}

export const receiveTeas = teas => {
    return {
        type: RECEIVE_TEAS,
        teas //teas: teas
    };
};

export const removeTea = teaId => ({
    type: REMOVE_TEA,
    teaId
});

// THUNK ACTION CREATORS
export const fetchTeas = () => async (dispatch, getState) => {
    const res = await requestTeas(); // make an async request
    const teasData = await res.json(); // read response
    return dispatch(receiveTeas(teasData)); // send data to store
};

export const fetchTeaDetail = (teaId) => async (dispatch) =>{
    const res = await fetch(`/api/teas/${teaId}`);
    const data = await res.json();
    return dispatch(receiveTeaDetail(data));

}

export const createTea = tea => (dispatch, getState) => (
    postTea(tea)
        .then(res => res.json())
        .then(teaData => dispatch(receiveTea(teaData)))
);

// SELECTORS
export const selectAllTeas = state => Object.values(state.teas);

// REDUCER
const teaReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type){
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        case RECEIVE_TEAS:
            return {...nextState, ...action.teas};  
            // action.teas.forEach(tea => {
            //     nextState[tea.id] = tea;
            // });
            // return nextState;
        case RECEIVE_TEA_DETAIL:
            // debugger
            nextState[action.payload.tea.id] = action.payload.tea;
            return nextState;
        case REMOVE_TEA:
            delete nextState[action.teaId];
            return nextState;
        default:
            return state;
    }
};

export default teaReducer;