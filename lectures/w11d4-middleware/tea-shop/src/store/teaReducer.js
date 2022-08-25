const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

// export const fetchTeas = () => async (dispatch) => {
//   const res = await fetch(`/teas`); // get the fruits at `/fruits`
//   const data = await res.json();
//   res.data = data;
//   if (res.ok) { // if response status code is less than 400
//     // dispatch the receive fruits POJO action
//     dispatch(receiveTeas(data.teas));
//   } else {
//     // if response status code is 400 or greater, throw the response as an error
//     throw res;
//   }
// };

export const fetchTeas = () => (dispatch) => {
  fetch(`/teas`)
  .then(res => res.json())
  .then(data => dispatch(receiveTeas(data.teas)))
  .catch(err => console.log(err))
};

/* ----ACTION CREATORS---- */
export const receiveTea = tea => ({
  type: RECEIVE_TEA,
  tea
});

export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});

/* ----REDUCER---- */
const teaReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  console.log(action);

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
  };
};

export default teaReducer;

/*
let obj = { 'greeting': 'hello', 'farewell': 'goodbye' };
let val = 'greeting';
obj[val]
*/