import { requestTeas, postTea, requestTeaDetail } from '../utils/tea_api_utils';

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';

/* ----THUNK ACTION CREATORS---- */
export const fetchAllTeas = () => async (dispatch) => {
  const res = await requestTeas();
  const teas = await res.json();
  dispatch(receiveTeas(teas));
}

export const createTea = (tea) => async (dispatch) => {
  // debugger
  const res = await postTea(tea);
  let data;
  if (res.ok) {
    data = await res.json();
    dispatch(receiveTea(data))
  } else {
    console.log(res.statusText);
  }
}

export const fetchTeaDetail = teaId => async dispatch => {
  const res = await requestTeaDetail(teaId);
  let data;
  if (res.ok){
    data = await res.json();
    dispatch(receiveTeaDetail(data));
  } else {
    console.log(res.statusText);
  }

}

/* ----ACTION CREATORS---- */
export const receiveTea = tea => {
  // debugger
  return {
  type: RECEIVE_TEA,
  tea
}};
// {tea: '1': {id:1} ,...}

export const receiveTeaDetail = payload => {
  return {
    type: RECEIVE_TEA_DETAIL,
    payload
  }
}

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

  switch (action.type) {
    case RECEIVE_TEA:
      // debugger
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      // action.teas.forEach((tea)=>{
      //   nextState[tea.id] = tea;
      // })
      
      // return nextState;

      return {...nextState, ...action.teas}
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    case RECEIVE_TEA_DETAIL:
      nextState[action.payload.tea.id] = action.payload.tea;
      return nextState;

      // return {...nextState, ...action.payload.tea}
    default:
      // return nextState;
      return state;
  };
};

export default teaReducer;

/*
let obj = { 'greeting': 'hello', 'farewell': 'goodbye' };
let val = 'greeting';
obj[val]
*/