import {Link, NavLink } from 'react-router-dom';

const JobIndexItem = props => {
    // return <Link to={`/jobs/${props.job.id}`} className="job-index-item">{props.job.title}</Link>
    return <NavLink 
            to={`/jobs/${props.job.id}`} 
            className="job-index-item"
            activeStyle={{ color: "brown"}} 
            >{props.job.title}</NavLink>

}

export default JobIndexItem;