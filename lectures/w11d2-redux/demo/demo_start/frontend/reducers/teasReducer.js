import { RECEIVE_TEA } from "../actions/tea_actions";
// reducer takes in oldState and an action 
const teasReducer = (oldState ={}, action )=>{
    // freeze the old state
    Object.freeze(oldState);
    // this makes the object unchangable

    const newState = Object.assign({ },oldState);
    // first arg is the target, everything gets assigned to the target

    switch (action.type) {
        case RECEIVE_TEA:
            newState[action.tea.id] = action.tea
            return newState;
        default:
            return oldState;
    }
}

export default teasReducer;

// let greenTea = {
//     //             flavor:"green tea",
//     //             amount: 2.99,
//     //             id:4
//     // }

// {
//     type:"RECEIVE_TEA",
//     tea: tea
// }
// reducers return new objects NOT a changed oldState object



