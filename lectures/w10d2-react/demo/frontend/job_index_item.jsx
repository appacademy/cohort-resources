import React from 'react';

const JobIndexItem = ({company, title, location}) => {
  return(
    <li>
      <dl>
        {company}
        <dd>{location}</dd>
        <dd>{title}</dd>
      </dl>
    </li>
  )
}

export default JobIndexItem;