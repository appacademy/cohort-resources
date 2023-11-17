import './JobListingIndex.css';
import jobData from '../assets/jobData';
import JobListingItem from './JobListingItem';

const JobListingIndex = props => {
  const jobArray = Object.values(jobData);

  return (
    <ul className='job-index'>
      {jobArray.map((jobInfo, idx) => (
        <JobListingItem key={idx} jobInfo={jobInfo} />
      ))}
    </ul>
  )
};

export default JobListingIndex;