import { RECEIVE_TEA } from '../actions/tea_actions';

const teasReducer = (oldState = {},action) => {
    console.log('in teas reducer')

    Object.freeze(oldState);
    const nextState = Object.assign({},oldState); // this is essentially copying old state

    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            // nextState = {1: {        
                // flavor: 'green',
                // amount: 2.75,
                // id: 1}
            // }
            return nextState
        default:
            return oldState
    }
}

export default teasReducer;