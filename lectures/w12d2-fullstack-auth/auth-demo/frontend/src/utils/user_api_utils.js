import { csrfFetch } from "../store/csrf";

export const logout = async () => (
  csrfFetch('/api/session', {
    method: 'DELETE'
  })
);

export const login = async user => (
  csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  })
);