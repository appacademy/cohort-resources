export const getTeas = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teas'
  });
};

export const postTea = (tea) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teas',
    data: {
      tea
    }
  });
};