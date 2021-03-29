import * as TeaAPIUtil from '../utils/tea_utils';

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_TEAS = 'RECEIVE_TEAS';

export const receiveTea = (teaPayload) => {
    return {
        type: RECEIVE_TEA,
        tea: teaPayload
    }
}

export const receiveTeas = (teas) => {
    return {
        type: RECEIVE_TEAS,
        teas: teas
    }
}

export const fetchAllTeas = () => (dispatch, getState) => (
    TeaAPIUtil.fetchTeas().then(teas => dispatch(receiveTeas(teas)))
)
