const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA'

//ACTION CREATORS
export const receiveTea = tea => {
    return {
        type: RECEIVE_TEA,
        tea: tea
    };
};

export const receiveTeas = teas => {
    return {
        type: RECEIVE_TEAS,
        teas //teas: teas
    };
};

export const removeTea = teaId => (
    {
        type: REMOVE_TEA,
        teaId
    }
);

//REDUCER
const teaReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch(action.type){
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        case RECEIVE_TEAS:
            return {...nextState, ...action.teas};  
        case REMOVE_TEA:
            delete nextState[action.teaId];
            return nextState;
        default:
            return state;
    }
};

export default teaReducer;