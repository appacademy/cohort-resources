import JobIndexItem from "./JobIndexItem"

const JobIndex = (props) => {
    // console.log(jobs)
    const allJobs = Object.values(props.jobs).map((job) =>  <JobIndexItem job={job}  key={job.id}/>)


    return(
        <>
            <h1>Hello from the job index</h1>
            {allJobs}
        </>
    )
}

export default JobIndex;