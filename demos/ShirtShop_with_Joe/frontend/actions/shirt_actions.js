// action constants
export const ADD_SHIRT = 'ADD_SHIRT';

// action
export const addButtonUp = {
  type: ADD_SHIRT,
  shirt: {
    id: 1,
    style: 'button up',
    price: 25.39
  }
};

// action creator
export const addShirt = (shirt) => {
  return {
    type: ADD_SHIRT,
    shirt: shirt
  };
};

// export const addShirt = (shirt) => ({
//     type: ADD_SHIRT,
//     shirt
//   });