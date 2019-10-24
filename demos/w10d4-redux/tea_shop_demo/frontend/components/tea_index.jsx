import React from 'react';

const teaIndex = (props) => {
  return (
    <div>
      <h2>All Teas</h2>
      <ul>
        {props.teas.map( tea => {
          return <li key={tea.id}>{tea.flavor}</li>
        })}
      </ul>
    </div>
  );
};

export default teaIndex;