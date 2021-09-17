export const selectTransactionsByTea = (state, teaId) => {
    if (state.teas[teaId].transactionIds === undefined) return []
    
    return state.teas[teaId].transactionIds
        .map(transactionId => state.transactions[transactionId]);
};