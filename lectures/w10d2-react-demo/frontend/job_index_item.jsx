import React from 'react';
//const JobIndextItem = (props); object destructing for only the listing key
const JobIndexItem = ({listing}) => {
  return(
    <li>
      <dl>{listing.company}
        <dd>{listing.location}</dd>
        <dd>{listing.title}</dd>
        <dd>{listing.type}</dd>
      </dl>
    </li>
  )
}

export default JobIndexItem;