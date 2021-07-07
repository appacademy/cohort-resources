import { RECEIVE_TEA } from '../actions/tea_actions';

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
        default: 
            return state;
    }
}

export default teasReducer; 