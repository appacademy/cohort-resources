import React from 'react';
import JobIndexItem from './job_index_item';

const JobIndex = props => {
  return(
    <ul>
      {
        props.listings.map(listing => {
        return(<JobIndexItem 
            key={listing.id} 
            company={listing.company}
            title={listing.title}
            location={listing.location}
            type={listing.type}
          />)
        })
      }
    </ul>
  )
};

export default JobIndex;