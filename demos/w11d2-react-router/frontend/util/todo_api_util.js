export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const fetchTodo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`,
  })
);

export const createTodo = todo => (
 $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);

export const updateTodo = todo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: { todo }
  })
);

export const destroyTodo = todo => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`
  })
);
