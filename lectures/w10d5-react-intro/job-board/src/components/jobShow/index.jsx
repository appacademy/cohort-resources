import React from 'react';
import { Link, useParams } from 'react-router-dom';

import jobData from '../../assets/jobData';
import JobIndexItem from '../jobIndexItem';

const JobShow = (props) => {
  console.log('JobShow props:', props);

  const { jobId } = useParams();
  // console.log(jobId);
  const job = jobData[jobId];

  return (
    <div className='job-show'>
      <JobIndexItem job={job} />
      <Link to='/home'>Go Back Home</Link>
    </div>
  )
};

export default JobShow;