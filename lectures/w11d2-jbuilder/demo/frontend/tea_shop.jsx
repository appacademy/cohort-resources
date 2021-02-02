import configureStore from './store/store'; // exported default 

// import { receiveGreenTea } from './actions/tea_actions';
// import { receiveTea } from './actions/tea_actions'; // exported various functions
// import * as teaActions from './actions/tea_actions'; teaActions.receiveTea

import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import { createTea, fetchAllTeas, fetchTea  } from './util/tea_api_util';
import * as TEA_ACTIONS from './actions/tea_actions';
import { selectTeaTransactionsByTea } from "./reducers/selectors";

const teas = {
	teas: {
		1: {
				id: 1,
				flavor: "oolong",
				amount: 2.75
		},
		2: {
				id: 2,
				flavor: 'jasmine',
				amount: 2
		},
		3: {
				id:3,
				flavor: 'green',
				amount: 4
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	window.store = store; // Creates Store for us
	window.fetchAllTeas = fetchAllTeas;
	// window.createTea = createTea;
	window.TEA_ACTIONS = TEA_ACTIONS;
	window.fetchTea = fetchTea;
	window.selectTeaTransactionsByTea = selectTeaTransactionsByTea;

	const root = document.getElementById("root")
	ReactDOM.render(<Root store={store}/>,root)


	// window.receiveTea = receiveTea;
})