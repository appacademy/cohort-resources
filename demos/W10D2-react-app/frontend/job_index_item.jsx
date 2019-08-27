import React from 'react';

// can destructure props inline with function declaration
const JobIndexItem = ({ company, location, type, title }) => {
  debugger
  // ES6 Object Destructuring!!
  // create variable equivalents of object's keys
  // const { company, location, type, title } = props;
  
  return (
    <li>
      <dl>
        {company}
        <dd>{location}</dd>
        <dd>{title}</dd>
        <dd>{type}</dd>
      </dl>
    </li>
  );
}

export default JobIndexItem;