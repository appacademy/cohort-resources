import { csrfFetch } from "../store/csrf";

export const requestTeas = () => {
  return fetch('/api/teas');
};

export const postTea = (tea) => {
  return csrfFetch('/api/teas', {
    method: 'POST',
    body: JSON.stringify(tea)
  });
};

export const requestTeaDetail = id => {
  return fetch(`/api/teas/${id}`)
}

//let tea = {flavor: 'Par', price: 5, description: "Its par tea time"}