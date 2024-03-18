import { Outlet } from "react-router-dom";
import './JobContainer.css';

const JobContainer = props => {
  return (
    <div className="job-container">
      <h2>JobContainer</h2>
      <Outlet />
    </div>
  )
};

export default JobContainer;