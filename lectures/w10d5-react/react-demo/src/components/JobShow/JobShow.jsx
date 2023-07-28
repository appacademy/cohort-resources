import React from "react";
import { useParams } from "react-router-dom";
import jobData from "../../assets/jobData";

const JobShow = props => {
    console.log(useParams()) //{jobId: 1}
    const {jobId} = useParams();
    const job = jobData[jobId]
    return(
        <>
            <h1>Job Show</h1>
            <li>{job.title}</li>
            <li>{job.salary}</li>
            <li>{job.pto}</li>
       </>
        
    )
}

export default JobShow;