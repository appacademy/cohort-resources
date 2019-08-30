export const fetchAllTeas = () => {
  return $.ajax({
    url: `/api/teas`,
    method: `get`,
  });
};

export const createTea = (tea) => {
  // debugger
  return $.ajax({
    url: `/api/teas`,
    method: `post`,
    data: {
      tea: tea,
    },
  });
};