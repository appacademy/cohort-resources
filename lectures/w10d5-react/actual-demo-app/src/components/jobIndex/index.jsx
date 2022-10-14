import React from 'react';
import jobData from '../../assets/jobData';
import JobIndexItem from '../jobIndexItem';

const JobIndex = (props) => {
  const jobs = Object.values(jobData);
  console.log(jobs)
  
  const jobList = jobs.map( (job) => {
    return <JobIndexItem key={job.id} job={job}/>
  })

  return(
    <ul className="job-index">
      {jobList}
    </ul>
  )
}

export default JobIndex;