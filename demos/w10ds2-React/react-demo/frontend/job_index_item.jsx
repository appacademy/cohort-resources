import React from 'react';

const JobIndexItem = ({ company, title, type, location }) => {
  // debugger;
  let colorClass = 'red';
  if (type === 'Full Time') {
    colorClass = 'green'
  }
  return (
    <ul>
      <li>{company}</li>
      <li>{location}</li>
      <li>{title}</li>
      <li className={colorClass}>{type}</li>
    </ul>
  );
};

export default JobIndexItem;