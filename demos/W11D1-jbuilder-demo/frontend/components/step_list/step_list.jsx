import React from 'react';
// Components
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = ({ steps, todoId, createStep }) => {

  // debugger
  const stepItems = steps.map(step => {
    return <StepListItemContainer
      key={step.id}
      step={step} />
  });

  return (
    <div>
      <ul className="step-list">
        {stepItems}
      </ul>
      <StepForm todoId={todoId} createStep={createStep} />
    </div>
  )
};

export default StepList;
