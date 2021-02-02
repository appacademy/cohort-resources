export const selectTeaTransactionsByTea = (state, teaId) =>{
    if (state.teas[teaId].transactionIds === undefined) return [];
    
    return state.teas[teaId].transactionIds.map(transactionId => {
        return state.transactions[transactionId];
    });
}