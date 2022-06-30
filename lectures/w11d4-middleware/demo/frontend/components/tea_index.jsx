import React from 'react';
import TeaForm from './tea_form';

const TeaIndex = (props) => {
  return (
    <div>
      <h1>All Teas</h1>
      <ul>
        {
          props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}</li>)
        }
      </ul>
      <TeaForm receiveTea={props.receiveTea} />
      <h3>Green Teas</h3>
      <ul>
        {
          props.greenTeas.map((tea) => (
            <li key={tea.id}>{tea.flavor}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default TeaIndex;