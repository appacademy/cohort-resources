export const fetchTeas = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/teas'
  })
};

export const fetchTea = (teaId) => {

  return $.ajax({
    method: 'GET',
    url: `api/teas/${teaId}`
  })
}

export const createTea = (tea) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teas',
    data: {
      tea: tea,
    }
  })
}