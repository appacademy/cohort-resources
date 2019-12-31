export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({ steps }, todo_id) => {
  const result = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todoId === todo_id) result.push(step);
  });
  return result;
};
