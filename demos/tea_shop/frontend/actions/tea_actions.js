export const RECEIVE_TEA = 'RECEIVE_TEA';

// static action
export const receiveGreenTea = {
  type: RECEIVE_TEA,
  tea: {
    flavor: 'green',
    amount: 2.75,
    id: 1
  }
}

// dynamic action creator
// implicitly returning an object => ({})
export const receiveTea = (tea) => ({
  type: RECEIVE_TEA,
  tea
})