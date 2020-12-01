export const selectTransactionByTea = (state, teaId) => {
   if (state.teas[teaId].transaction_ids === undefined) {
     return [];
   }
  return state.teas[teaId].transaction_ids.map( id => {
    return state.transactions[id];
  });
};