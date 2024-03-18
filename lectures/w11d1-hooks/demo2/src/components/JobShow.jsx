import { Link, useParams } from 'react-router-dom';
import './JobShow.css';

const JobShow = ({ jobData }) => {
  const { jobId } = useParams();
  const job = jobData[jobId];

  return (
    <div className='job-show'>
      <h2>JobShow</h2>
      <h3>{job.title}: ${job.salary}</h3>
      <ul>
        <li>PTO: {job.pto}</li>
        <li>Saved: {job.saved ? '✅' : '❌'}</li>
        <li>Applied: {job.applied ? '✅' : '❌'}</li>
      </ul>
      <Link to={'/jobs'}>Home</Link>
    </div>
  );
};

export default JobShow;