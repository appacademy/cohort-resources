export const getTeas = () => (
  fetch('/api/teas')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
);

export const getTea = teaId => (
  fetch(`/api/teas/${teaId}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
);

export const postTea = teaData => (
  fetch('/api/teas', {
    method: 'post',
    body: JSON.stringify(teaData),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
);

export const deleteTea = teaId => (
  fetch(`/api/teas/${teaId}`, {
    method: 'delete'
  })
    .then(res => {
      if (res.ok) {
        return;
      } else {
        throw res;
      }
    })
);