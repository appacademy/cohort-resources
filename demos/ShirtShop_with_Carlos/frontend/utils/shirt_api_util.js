export const fetchAllShirts = () => {
  debugger
  return $.ajax({
    url: `/api/shirts`,
    method: `get`,
  });
};

export const createShirt = (shirt) => {
  debugger
  return $.ajax({
    url: `/api/shirts`,
    method: `post`,
    data: {
      shirt: shirt,
    },
  });
};
