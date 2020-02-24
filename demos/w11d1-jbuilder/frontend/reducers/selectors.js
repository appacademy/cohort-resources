export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};

export const tagsByTodoId = (entities, todoId) => {

  // let allTaggingsArray = Object.values(entities.taggings);
  // let taggingsForTodo = allTaggingsArray.filter(tagging => tagging.todo_id === todoId);
  // let tagsForTagging = taggingsForTodo.map(tagging => entities.tags[tagging.tag_id]);
  // return tagsForTagging;

  return Object.values(entities.taggings)
          .filter( tagging => tagging.todo_id === todoId )
            .map( tagging => entities.tags[tagging.tag_id] );
}