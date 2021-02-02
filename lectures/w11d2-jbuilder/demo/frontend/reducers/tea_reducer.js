import { RECEIVE_TEA, RECEIVE_ALL_TEAS, RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const teasReducer = (oldState = {},action) => {
    // console.log('in teas reducer')

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
			return nextState;
		case RECEIVE_ALL_TEAS:
			// action.teas.forEach( tea => {
			// 		nextState[tea.id] = tea;
			// }) our action.teas will no longer be an array
			// return nextState;

			return Object.assign(nextState, action.teas);
		case RECEIVE_TEA_DETAIL:
			nextState[action.payload.tea.id] = action.payload.tea;
			return nextState;
		default:
			return oldState
}
}

export default teasReducer;