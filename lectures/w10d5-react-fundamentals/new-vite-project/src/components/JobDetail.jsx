import { useParams } from 'react-router-dom';
import './JobDetail.css';

const JobDetail = props => {
  const { jobId } = useParams();

  return (
    <h2>JobDetail: {jobId}</h2>
  )
};

export default JobDetail;