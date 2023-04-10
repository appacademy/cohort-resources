import { Link, NavLink } from 'react-router-dom';
import './JobIndex.css';

const JobIndex = props => {
  return (
    <>
      <h2>Job Index</h2>
      <ul>
        {Object.values(props.jobData).map((job, idx) => (
          <li key={idx}>
            {/* <Link to={`/jobs/${job.id}`}>{job.title}</Link> */}
            <NavLink 
              to={`/jobs/${job.id}`}
            >{job.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
};

export default JobIndex;