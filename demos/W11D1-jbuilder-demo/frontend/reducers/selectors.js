// export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

// export const stepsByTodoId = ({ steps }, todoId) => {
//   const stepsFiltered = [];
//   Object.keys(steps).forEach(stepId => {
//     const step = steps[stepId];
//     if (steps[stepId].todoId === todoId) stepsFiltered.push(step);
//   });

//   return stepsFiltered;
// };

export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({ steps }, todoId) => {
  const stepsFiltered = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    // debugger
    if (steps[stepId].todoId === todoId) stepsFiltered.push(step);
  });
  // debugger
  return stepsFiltered;
};

