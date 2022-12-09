import './JobIndex.css';
import jobData from '../assets/jobData';
import JobIndexItem from './JobIndexItem';

const JobIndex = props => {
  const jobs = Object.values(jobData);
  console.log(jobs);

  return (
    <div className='job-index'>
      {jobs.map((job, i) => (
        <JobIndexItem key={i} job={job} />
      ))}
    </div>
  )
};

export default JobIndex;