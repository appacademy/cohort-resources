import './JobIndex.css';
import JobIndexItem from './JobIndexItem';

const JobIndex = ({ jobData }) => {
  console.log(jobData);

  return (
    <div className="job-index">
      <h2>JobIndex</h2>
      {Object.values(jobData).map((ele, idx) => (
        <JobIndexItem key={ele.id} data={ele} />
      ))}
    </div>
  )
};

export default JobIndex;