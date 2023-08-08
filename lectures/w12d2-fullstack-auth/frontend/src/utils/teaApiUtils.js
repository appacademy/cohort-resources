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
  const res = await fetch('/api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
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