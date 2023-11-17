import { Link } from 'react-router-dom';
import './JobListingItem.css';

const JobListingItem = ({ jobInfo }) => {
  return (
    <li className='job-item'>
      <Link to={`${jobInfo.id}`}>{jobInfo.title}</Link> - ${jobInfo.salary}
    </li>
  )
};

export default JobListingItem;