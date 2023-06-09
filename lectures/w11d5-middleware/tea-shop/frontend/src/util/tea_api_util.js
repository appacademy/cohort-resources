export const requestTeas = () => {
  return fetch('/api/teas');
};

export const createTea = (tea) => {
  return fetch('/api/teas', {
    method: "POST",
    body: JSON.stringify(tea),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};