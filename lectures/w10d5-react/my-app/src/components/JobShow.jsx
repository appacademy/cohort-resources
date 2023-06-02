import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import jobData from "../assets/JobData";


const JobShow = (props) => {
    const {jobId} = useParams()
    const job = jobData[jobId]
    return(
        <>
        <Link to="/jobs"><button>back to index</button></Link>
        <h1>This is the {job.title} home page</h1>
            <ul>
                {/* <li>{job.title}</li> */}
                <li>you will get paid: ${job.salary}</li>
            </ul>
        </>
    )
}

export default JobShow;