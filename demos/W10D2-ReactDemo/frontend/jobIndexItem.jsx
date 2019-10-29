import React from 'react';

const JobIndexItem = ({title, company, location, type}) => {
  let colorClass = 'red';
  if (type === 'Full Time') {
      colorClass = 'green';
  }
  return (
    <li>
        <dl>
            <dt>Title</dt>
            <dd>{title}</dd>
            
            <dt>Company</dt>
            <dd>{company}</dd>
            
            <dt>Location</dt>
            <dd>{location}</dd>
            
            <dt>Type</dt>
            <dd className={colorClass}>{type}</dd>
        </dl>     
    </li>
  )
};

export default JobIndexItem;