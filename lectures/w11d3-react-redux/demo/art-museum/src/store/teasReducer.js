const RECEIVE_TEA = 'RECEIVE_TEA'
const RECEIVE_TEAS = 'RECEIVE_TEAS'
const REMOVE_TEA = 'REMOVE_TEA'

//ACTION CREATORS
export const receiveTea = (tea) => {
    // debugger
    return {
        type: RECEIVE_TEA,
        tea
    }
}

export const receiveTeas = (teas) => {
    debugger
    return {
        type: RECEIVE_TEAS,
        teas
    }
}


export const removeTea = (teaId) => {
    return {
        type: REMOVE_TEA,
        teaId
    }
}


// REDUCER

export const teasReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state)
    const newState = { ...state }

    switch (action.type) {
        case RECEIVE_TEA:
            // debugger
            newState[action.tea.id] = action.tea
        return newState;
        case RECEIVE_TEAS:
            // debugger
            return {...newState, ...action.teas}
        case REMOVE_TEA:
            delete newState[action.teaId]
            return newState;
        default:
            return newState;
    }
}

export default teasReducer;