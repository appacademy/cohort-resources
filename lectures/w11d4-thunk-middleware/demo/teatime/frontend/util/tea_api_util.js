export const fetchTeas = () => {
  return $.ajax({
    method: 'get',
    url: '/api/teas'
  });
};

export const createTea = (tea) => {
  return $.ajax({
    method: 'post',
    url: '/api/teas',
    data: {tea: tea}
  });
};