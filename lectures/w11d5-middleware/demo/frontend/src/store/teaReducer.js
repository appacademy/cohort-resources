import { postTea, requestTeas } from "../utils/tea_api_util";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA'

// REGULAR ACTION CREATORS
export const receiveTea = tea => ({
    type: RECEIVE_TEA,
    tea
});

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
    const res = await requestTeas();
    const teasData = await res.json();
    return dispatch(receiveTeas(teasData));
};

export const createTea = tea => async (dispatch, getState) => (
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
            // return {...nextState, ...action.teas};  
            action.teas.forEach(tea => {
                nextState[tea.id] = tea;
            });
            return nextState;
        case REMOVE_TEA:
            delete nextState[action.teaId];
            return nextState;
        default:
            return state;
    }
};

export default teaReducer;