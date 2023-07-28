const JobIndexItem = props =>{
    const {job} = props;
    return (
        <li className="job-item">{job.title}</li>
    )
}

export default JobIndexItem;