// reducers are pure functions
// they are deterministic // same input always returns the same output
// no side effects 
    // ex of side effect: mutating the inputs

// reducer is a function that takes in state and an action as arguments
    // it then returns either the state that it took in
    // or a brand new object to represent state

import { RECEIVE_TEA, RECEIVE_ALL_TEAS } from '../actions/tea_actions';

const teasReducer = (oldState = {}, action) => {
  // debugger;
    // SHOULD NEVER MUTATE OLDSTATE important!
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState); // create a copy of oldState
    // let nextState = { ...oldState }; same thing as above
    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        case RECEIVE_ALL_TEAS:
            action.teas.forEach( tea => {
              nextState[tea.id] = tea
            });
            return nextState;
        default:
            return oldState;
    }
};

export default teasReducer; 