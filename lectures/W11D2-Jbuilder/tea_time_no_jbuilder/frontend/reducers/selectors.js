export const selectTransactionsByTea = (state, teaId) => {
    // we want an array of all transaction objs associated with the teaId
    if (state.teas[teaId].transactionIds === undefined) {
        return [];
    }
    return state.teas[teaId].transactionIds.map(transactionId => {
        return state.transactions[transactionId];
    });
};