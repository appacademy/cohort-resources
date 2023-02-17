export const requestTeas = () => (
  fetch('/api/teas')
);

export const postTea = tea => (
  fetch('/api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
);