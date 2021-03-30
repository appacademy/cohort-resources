export const fetchTeas = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/teas'
  })
};

export const createTea = (tea) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teas',
    data: {
      tea: tea,
    }
  })
}