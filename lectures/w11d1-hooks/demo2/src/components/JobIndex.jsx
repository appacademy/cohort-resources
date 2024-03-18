import { useEffect, useState } from 'react';
import './JobIndex.css';
import JobIndexItem from './JobIndexItem';

const JobIndex = () => {
  const [filter, setFilter] = useState('all');
  const [jobData, setJobData] = useState({});
  console.log('rendering...');
  console.log('jobData is: ', jobData)

  const fetchData = async () => {
    const res = await fetch('../../jobData.json');
    const data = await res.json();
    setJobData(data);
  };

  useEffect(() => {
    // need to fetch data from "backend" and store it in jobData
    // console.log('inside useEffect');
    // fetch('../../jobData.json')
    //   .then(res => res.json())
    //   .then(data => setJobData(data));

    fetchData();
    return () => console.log('goodbye cruel world');
  }, []);

  useEffect(() => {
    console.log('The current filter is: ', filter);
  }, [filter])

  const filteredJobs = () => {
    const jobArray = Object.values(jobData);
    switch (filter) {
      case 'all':
        return jobArray;
      case 'saved':
        return jobArray.filter(ele => ele.saved);
      case 'applied':
        return jobArray.filter(ele => ele.applied);
    }
  };

  const handleClick = type => e => {
    setFilter(type);
  };

  return (
    <div className="job-index">
      <h2>JobIndex</h2>
      <div className='filter-buttons'>
        <p className={filter === 'all' ? 'active' : ''} onClick={handleClick('all')}>All</p>
        <p className={filter === 'saved' ? 'active' : ''} onClick={handleClick('saved')}>Saved</p>
        <p className={filter === 'applied' ? 'active' : ''} onClick={handleClick('applied')}>Applied</p>
      </div>
      {filteredJobs().map((ele, idx) => (
        <JobIndexItem key={ele.id} data={ele} />
      ))}
    </div>
  )
};

export default JobIndex;