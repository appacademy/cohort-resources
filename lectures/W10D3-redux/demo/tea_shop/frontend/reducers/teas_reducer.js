import { RECEIVE_TEA } from '../actions/tea_actions';

// reducers are functions
// never mutate currentState
// redux only knows state changed if 
    // reducer returns an object with new id
    // mutating doesnt return new object id
// all reducers get all actions

const teasReducer = (currentState = {}, action) => {
    // helps prevent us from accidently mutating currentState
    Object.freeze(currentState);

    // this does not mutate original state, nextState has new objectId
    let nextState = Object.assign({}, currentState); // creates shallow copy of currentState
    // let nextState = {...currentState}; fancy

    switch (action.type) {
        case RECEIVE_TEA:
            // this only mutates nextState
            nextState[action.tea.id] = action.tea; // adds a key of whatever action.tea.id is
            return nextState;
        default:
            return currentState;
    }
}

// {
//     54398: { flavor: 'hoji cha', amount: 5, id: 54398},
//     2: { flavor: 'another tea', amount: 3, id: 2}
// }

export default teasReducer;