import React from 'react';
import { Link } from 'react-router-dom';

const JobIndexItem = (props) => {
  console.log('JobIndexItem props:', props);

  return (
    <div className='job-index-item'>
      <Link to={`/jobs/${props.job.id}`}>
        <h2>{props.job.title}</h2>
      </Link>
      <ul>
        <li>${props.job.salary}</li>
        <li>{props.job.pto}</li>
      </ul>
    </div>
  )
};

export default JobIndexItem;