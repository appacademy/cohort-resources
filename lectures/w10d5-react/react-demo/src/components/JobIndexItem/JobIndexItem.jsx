import {Link, NavLink} from 'react-router-dom';
const JobIndexItem = props =>{

    const {job} = props;
    return (
        <NavLink to={`/jobs/${job.id}`} activeClassName={"banana"}><li className="job-item" >{job.title}</li></NavLink>
    )
}

export default JobIndexItem;