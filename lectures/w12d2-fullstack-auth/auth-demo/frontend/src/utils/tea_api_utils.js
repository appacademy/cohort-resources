export const requestTeas = () => {
  return fetch('/api/teas');
};

export const postTea = (tea) => {
  return fetch('/api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};

export const requestTeaDetail = id => {
  return fetch(`/api/teas/${id}`)
}

//let tea = {flavor: 'Par', price: 5, description: "Its par tea time"}