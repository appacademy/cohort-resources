import { Link } from 'react-router-dom';
import './JobIndexItem.css';

const JobIndexItem = ({ data }) => {
  return (
    <div className="job-index-item">
      <h2>JobIndexItem</h2>
      <h3>
        <Link to={`/jobs/${data.id}`}>{data.title}: ${data.salary}</Link>
      </h3>
    </div>
  );
};

export default JobIndexItem;