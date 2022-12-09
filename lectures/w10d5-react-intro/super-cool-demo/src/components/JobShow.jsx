import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import jobData from '../assets/jobData';

const JobShow = props => {
  const { jobId } =  useParams();

  const job = jobData[jobId];
  return (
    <>
      <h4>I'm the job show component, specifically for job #{jobId}</h4>
      <h5>Become a {job.title} today!</h5>
      <Link to='/jobs'>No Thank You</Link>
    </>
  )
};

export default JobShow;