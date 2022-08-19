import React from 'react';
import JobIndexItem from '../jobIndexItem';
import jobData from '../../assets/jobData';
import { useParams } from 'react-router';

const JobIndex = (props) => {
  console.log('JobIndex props:', props);

  const { indexType } = useParams();

  let jobs;
  switch (indexType) {
    case 'home':
      jobs = Object.values(jobData);
      break;
    case 'saved':
      jobs = Object.values(jobData).filter(el => el.saved);
      break;
    case 'applied':
      jobs = Object.values(jobData).filter(el => el.applied);
      break;
    default:
      jobs = [];
  }
  
  return (
    <ul className='job-index'>
      {
        jobs.map((el, i) => (
          <li key={el.id}>
            <JobIndexItem key={el.id} job={el} />
          </li>
        ))
      }
    </ul>
  );
};

export default JobIndex;