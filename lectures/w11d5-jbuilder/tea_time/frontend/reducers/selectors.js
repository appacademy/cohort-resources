export const selectTransactionsByTea = (transactions, tea) => {
  if (tea.transaction_ids === undefined) return [];
  debugger
  return tea.transaction_ids.map(id => transactions[id]);
}