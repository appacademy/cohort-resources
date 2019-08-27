import React from 'react';
import JobIndexItem from './job_index_item';

// This component is solely used for rendering - doesn't need to maintain state
// so can use functional component
const JobsIndex = (props) => {
  return (
    <ul>
      {/* if you pass array of elements it renders them one by one */}
      {
        props.listings.map(listing => {
          return <JobIndexItem  
            company={listing.company}
            title={listing.title}
            type={listing.type}
            location={listing.location}
          />
        })
      }
    </ul>
  );
}

export default JobsIndex;