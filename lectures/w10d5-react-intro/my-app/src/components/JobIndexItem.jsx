import { Link } from "react-router-dom";

const JobIndexItem = ({job}) => {
    return (
        <ul>
            <li><Link to={`/jobs/${job.id}`} >{job.title}</Link></li>
            <li>{job.salary}</li>
        </ul>
    )
}

export default JobIndexItem;