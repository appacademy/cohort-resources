import jobData from "../assets/JobData";

import JobIndexItem from "./JobIndexItem"

const JobIndex = ({ta}) => {
    // props = {jobs: [{},{},], ta: "Paulo"}
    // console.log("this the jobs:",jobs)
    // console.log("this the ta:", ta)
    // const listJobs = () => {
    //         return jobs.map((job) => {
    //             return (
    //             <ul key={job.id}>
    //                 <li>{job.title}</li>
    //                 <li>{job.salary}</li>
    //                 <li>{job.pto}</li>
    //             </ul>
    //             )
    //         })
    // }

    // const jobList = jobs.map(job => (<li key={job.id}>{job.title}</li>))
    const jobList = Object.values(jobData).map(job => (<JobIndexItem key={job.id} job={job} />))



    return(
        <div>
            <h1>This the jobs</h1>
            {jobList}
        </div>
    )
}

export default JobIndex;