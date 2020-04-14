import React from 'react';

const JobIndexItem = ({company, title, location, type}) => {
  return(
    <li>
      <dl>
        {company}
        <dd>{title}</dd>
        <dd>{location}</dd>
        <dd>{type}</dd>
      </dl>
    </li>
  )
}

export default JobIndexItem;