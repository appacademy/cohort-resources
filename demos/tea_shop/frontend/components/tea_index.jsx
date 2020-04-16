import React from 'react';

const TeaIndex = (props) => {
  function addGreenTea() {
    props.receiveTea({
      flavor: 'green',
      amount: 2.50,
      id: props.teas.length + 1
    })
  }
  
  return (
    <div>
      <h1>All Teas</h1>
      <ul>
        {/* gets teas in props via container */}
        {props.teas.map(tea => {
          // <TeaIndexItem tea={tea} />
          return (
            <>
              <li>{tea.flavor}</li>
              <li>{tea.amount}</li>
              <li>{tea.id}</li>
            </>
          )
        })}
      </ul>
      <button onClick={addGreenTea}>Add Green Tea!!</button>
    </div>
  );
}

export default TeaIndex;