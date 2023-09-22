import { useParams, Link } from "react-router-dom";
import jobData from "../assets/jobs";
const JobShow = (props) => {
    // console.log(jobs)
    // const allJobs = Object.values(props.jobs).map((job) =>  <JobIndexItem job={job}  key={job.id}/>)
    const {jobId} = useParams()
    const job = jobData[jobId]
    return(
        <>
            {console.log(job)}
            <h1>{job.title}</h1>
            <h2>${job.salary}</h2>
            <h2>PTO: {job.pto}</h2>
            <Link to="/jobs">Back to Index</Link>
        </>
    )
}

export default JobShow;