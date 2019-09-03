export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};

export const tagsByTodoId = (state, todoId) => {
  const taggings = Object.values(state.taggings);
  
  return taggings
    .filter(tagging => tagging.todoId === todoId)
    .map(tagging => state.tags[tagging.tagId]);
};
