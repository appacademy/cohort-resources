import * as TEA_API_UTIL from '../util/tea_api_util';

export const RECEIVE_TEA = "RECEIVE_TEA";
export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";
export const RECEIVE_TEA_DETAIL = "RECEIVE_TEA_DETAIL";

//--- Plain Action Creators ---

export const receiveTea = (tea) => {
	return {
		type: RECEIVE_TEA,
		tea // same as tea: tea #destructuring

	}
};

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  };
};

export const receiveTeaDetail = payload => { // we use `payload` to indicate there are different types of info in this POJO
	return {
		type: RECEIVE_TEA_DETAIL,
		payload
	}
}

//--- Thunk Action Creators ---

export const requestTea = teaId => dispatch => {
	return TEA_API_UTIL.fetchTea(teaId)
		.then( payload => {return dispatch(receiveTeaDetail(payload))});
}

export const getAllTeas = () => {
	return (dispatch) => {
		return TEA_API_UTIL.fetchAllTeas() //backend call 
			.then( teas => {
					dispatch(receiveAllTeas(teas)) //update frontend store
			})
	}
}

//getState is just to demo that we can put it there 
export const createTea = (tea) => (dispatch, getState) => {
	return TEA_API_UTIL.createTea(tea)
		.then( tea => dispatch(receiveTea(tea)))
		// .catch( (error) => console.log(error))
		// .fail( (error) => console.log(error)) for jquery ajax 
}


