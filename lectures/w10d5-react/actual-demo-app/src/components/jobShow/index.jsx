import React from 'react';
import jobData from '../../assets/jobData';
import { useParams } from 'react-router-dom'

const JobShow = () => {
  const { jobId } = useParams(); // grab id from the url

  const job = jobData[jobId];

  return (
    <div className="job-show">
      <h1>Job Show</h1>
      <h2>{job.title}</h2>
      <h3>salary: {job.salary}</h3>
      <h3>pto: {job.pto}</h3>
      <h3>saved?: {job.saved.toString()}</h3>
      <h3>applied?: {job.applied.toString()}</h3>
    </div>
  )
}

export default JobShow;