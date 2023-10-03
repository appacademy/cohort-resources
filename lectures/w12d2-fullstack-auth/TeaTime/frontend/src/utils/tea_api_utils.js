export const requestTeas = async () => {
  // debugger
  const res = await fetch('api/teas');
  const data = await res.json();
  return data; // comes from jbuilder
};

export const requestTea = async (teaId) => {
  const res = await fetch(`api/teas/${teaId}`);
  const data = await res.json();
  return data;
}

export const createTea = async (tea) => {
  const res = await fetch('api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const data = await res.json();
  return data;
};