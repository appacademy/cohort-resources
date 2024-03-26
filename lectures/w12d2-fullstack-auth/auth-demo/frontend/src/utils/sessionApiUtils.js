import { csrfFetch } from "./csrfUtils";

export const postUser = userInfo => (
  csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(userInfo)
  })
);

export const postSession = sessionInfo => (
  csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(sessionInfo)
  })
);

export const deleteSession = () => (
  csrfFetch('/api/session', {
    method: 'DELETE'
  })
);