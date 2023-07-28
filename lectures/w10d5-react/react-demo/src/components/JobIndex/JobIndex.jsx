import React from "react";
import jobData from "../../assets/jobData";
import JobIndexItem from "../JobIndexItem/JobIndexItem";


const JobIndex = props =>{
    const jobs = Object.values(jobData)
    const jobList = jobs.map(job =>( //implicit return
        // <li key={job.id}>{job.title}</li>
        <JobIndexItem key={job.id} job={job}/>
    ))

    return(
        <>
            <ul className="job-index">
                {jobList}
            </ul>  
        </>
    )
}

export default JobIndex;