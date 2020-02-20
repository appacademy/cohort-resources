import React from 'react';
import JobIndexItem from './job_index_item';

const JobIndex = (props) => {
  // debugger;
  const listings = props.listings.map((listing) => {
  return (
    <JobIndexItem 
    key={listing.id}
    company={listing.company}
    title={listing.title}
    type={listing.type}
    location={listing.location}
    />
  )
  })

  return (
    <ul>
      {listings}
    </ul>
  )
};

export default JobIndex;