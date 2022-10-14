import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const JobIndexItem = props => {
  return <NavLink 
            to={`/jobs/${props.job.id}`} 
            className="job-item"
            activeStyle={{color: "aquamarine"}}
            >{props.job.title}</NavLink>
}

export default JobIndexItem;