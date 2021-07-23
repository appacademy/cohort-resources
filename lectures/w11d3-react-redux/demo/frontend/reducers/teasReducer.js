import { RECEIVE_TEA } from "../actions/tea_actions";

// {
//   type: 'RECEIVE_TEA',
//   tea: {
//     id: 1,
//     flavor: 'green',
//     amount: 2.75
//   }
// }

// teas: 
  // 1: {
  //     id: 1,
  //     flavor: 'green',
  //     amount: 2.75
  //   }

// in charge of the teas slice of state

const teasReducer = (oldState = {}, action) => {
  Object.freeze(oldState); // protects prev state
  const nextState = Object.assign({}, oldState); // creates a new object to be returned

  switch (action.type) {
    case RECEIVE_TEA: // this is when update the state with more tea
      // nextstate => {}
      nextState[action.tea.id] = action.tea // {1: {id: 1, flavor: ... amount: ...}}
      return nextState;
    default: // we dont want to change the tea slice of state
      return oldState;
  }

}

export default teasReducer;