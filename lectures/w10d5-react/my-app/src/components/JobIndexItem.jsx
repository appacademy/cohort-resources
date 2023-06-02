import { Link } from "react-router-dom";


const JobIndexItem = ({job}) => {
    // console.log(job)
    return (
        <ul>
            <li> <Link to={`/jobs/${job.id}`}>{job.title}</Link></li>
            <li >{job.salary}</li>
            <li >{job.pto}</li>
            {/* <button>click me</button> */}
        </ul>
    )
}

export default JobIndexItem;