import jobData from "../assets/jobData";
import JobIndexItem from "./JobIndexItem";
// import React from "react";

const JobIndex = (props) => {
    const jobs = Object.values(jobData)
    console.log(jobs)

    const jobList = jobs.map((job) => {
        return <JobIndexItem key={job.id} job={job}/>
    })
    console.log(jobList)
    // const arr = [1,2,3,4]
    
    return (
        <ul className="job-index">
            {jobList}
        </ul>
    )
}

export default JobIndex;