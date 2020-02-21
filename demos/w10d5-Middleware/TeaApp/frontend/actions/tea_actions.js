import * as TeaApiUtil from '../utils/tea_api_util';

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS';

export const addHerbal = () => {
    return {
        type: RECEIVE_TEA,
        tea: {
            id: 5,
            flavor: 'mint',
            description: 'decaf and refreshing'
        }
    }
};

export const addTea = (tea) => ({
    type: RECEIVE_TEA,
    tea: tea
});

// REGULAR action creator
export const receiveAllTeas = (teas) => ({
         type: RECEIVE_ALL_TEAS,
         teas
       });

// THUNK action creator
export const createTea = (tea) => (dispatch) => {
    return TeaApiUtil.createTea(tea)
            .then(resTea => dispatch(addTea(resTea)));
}

export const fetchAllTeas = () => (dispatch) => {
    return TeaApiUtil.fetchAllTeas()
            .then(teas => dispatch(receiveAllTeas(teas)));
}