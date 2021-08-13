export const selectTransactionsByTea = (state, teaId) => {
    if(state.teas[teaId].transactionIds === undefined) return [];
    return state.teas[teaId].transactionIds //transactionIds is array of Ids stored in Teas object
        .map(transactionId => {
            return state.transactions[transactionId] //looking up each Id in transactions slice of state
        })
}