export const fetchAllTeas = () => (
  $.ajax({
    url: `/api/teas`,
    method: 'GET'
  })
);

export const createTea = (tea) => {
  return $.ajax({
    url: `/api/teas`,
    method: 'POST',
    data: {
      tea: tea
    }
  });
};

