import { RECEIVE_TEA, RECEIVE_TEAS, RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const teasReducer = (state = {}, action) => {
    Object.freeze(state);  
    const nextState = Object.assign({}, state);

    // {
    // type: 'RECEIVE_TEA',
    // tea: {
    //     flavor: 'green',
    //     amount: 2,
    //     id: 1
    // }
    // }

    //teas: {1: {flavor: ', amount: '', id: 1}}

    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        case RECEIVE_TEAS:
            // action.teas.forEach(tea => nextState[tea.id] = tea)
            // debugger
            // return Object.assign(nextState, action.teas);
            return {...nextState, ...action.teas};
        case RECEIVE_TEA_DETAIL:
            nextState[action.payload.tea.id] = action.payload.tea;
            return nextState;
        default: 
            return state;
    }
}

export default teasReducer; 