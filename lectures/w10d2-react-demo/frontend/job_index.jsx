import React from 'react';
import JobIndexItem from './job_index_item';

const JobIndex = (props) => {
  //no need for super since we don't need to use `this`
  //functional components don't need a constructor
  //render is implicit 
  //props is everything received from parent 
  //banana is the key provided from parent 
  //remember to return in .map 
  //key is a key word; they should point to ids that are unique
  //keys are not sent, just a pointer to each elemenet  

  return(
    <ul>
      {props.banana.map( listing => {
        return(
          // <li key={listing.id}>{listing.company}</li>
          <JobIndexItem key={listing.id} listing={listing}/>
        )
      })}
    </ul>
  )
}

export default JobIndex; 