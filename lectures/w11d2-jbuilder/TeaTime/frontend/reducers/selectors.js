
export const selectTeasByFlavor = (teas, flavor) => {
    const teasArray = Object.values(teas);
    return teasArray.filter(tea => tea.flavor === flavor);
}

export const selectTransactionsByTeaId = (state, teaId) => {
    const transactionIds = state.teas[teaId].transactionIds || [];
    
    return transactionIds.map(id => {
        const transaction = state.transactions[id];
        transaction.customer = state.users[transaction.userId].username;
        return transaction;
    })
}