import React from 'react';
import JobIndexItem from './jobIndexItem';


const JobIndex = (props) => {
  // props.listings = [jobs]
  const listings = props.listings.map( (listing, idx) => {
  return <JobIndexItem key={idx}
                       company={listing.company}
                       title={listing.title}
                       type={listing.type}
                       location={listing.location}
                      />
  });

  return(
    <ul>
       {/* {props.listings.map( listing => {
        return (
          <li>{listing.company}</li>
        )
      })} */}
      {listings}
    </ul>
  )
};

export default JobIndex;