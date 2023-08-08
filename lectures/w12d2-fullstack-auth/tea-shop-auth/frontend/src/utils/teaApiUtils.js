import { csrfFetch } from "./authUtils"

export const fetchAllTeas = () => (
  fetch('/api/teas')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        // error handling
      }
    })
)

export const fetchTea = async teaId => {
  const res = await fetch(`/api/teas/${teaId}`)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}

export const createTea = async tea => {
  const res = await csrfFetch('/api/teas', {
    method: 'POST'
  })
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}

export const deleteTea = teaId => (
  fetch(`/api/teas/${teaId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        // error handling
      }
    })
)