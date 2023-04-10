import { useParams } from 'react-router';
import './JobShow.css';

const JobShow = ({ jobData }) => {
  // A "hook" is a function invoked within a functional component that gives
  // us access to info outside the component
  const { jobId } = useParams();
  const job = jobData[+jobId];

  return (
    <>
      <h1>Job Show</h1>
      <h2>{job.title}</h2>
      <ul>
        <li>Salary: {job.salary}</li>
        <li>PTO: {job.pto}</li>
        <li>Saved: {job.saved ? 'true' : 'false'}</li>
      </ul>
    </>
  )
};

export default JobShow;