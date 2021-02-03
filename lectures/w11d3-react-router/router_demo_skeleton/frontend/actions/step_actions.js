import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";


// sync actions
export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});



// async actions
export const requestSteps = todoId => dispatch => (
  StepAPIUtil.fetchSteps(todoId)
  .then(steps => dispatch(receiveSteps(steps)))
);

export const createStep = (todoId, step) => dispatch => (
  StepAPIUtil.createStep(todoId, step)
  .then(step => dispatch(receiveStep(step)))
);


export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step)
  .then(step => dispatch(receiveStep(step)))
);

export const destroyStep = step => dispatch => (
  StepAPIUtil.destroyStep(step)
  .then(step => dispatch(removeStep(step)))
);
