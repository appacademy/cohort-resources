import { Link } from 'react-router-dom';
import './JobIndexItem.css';

const JobIndexItem = ({ job }) => {
  return (
      <ul className="job-item">
        <li>Title: {job.title}</li>
        <li>Salary: ${job.salary}</li>
        <li>PTO: {job.pto}</li>
        <li>Saved: {job.saved ? 'True' : 'False'}</li>
        <li>Applied: {job.applied ? 'True' : 'False' }</li>
        <li><Link to={`/jobs/${job.id}`}>Apply Here!</Link></li>
      </ul>
  )
};

export default JobIndexItem;