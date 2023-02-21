import { csrfFetch } from "../store/csrf";

export const requestTeas = () => {
  return fetch('api/teas');
}

export const asyncAwaitTeas = async () => {
  const res = await fetch('api/teas')
  if (res.ok) {
    const data = await res.json();
    return data
  } else {
    //error handling
  }
}

export const postTea = (tea) => {
  return csrfFetch('/api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
}