import React from 'react';

const JobIndexItem = ({company, title, type, location}) => {
  //props.listing = listing
  return (
    <li> {company}
      <p>{title}</p>
      <p>{type}</p>
      <p>{location}</p>
    </li>
  )
};

export default JobIndexItem