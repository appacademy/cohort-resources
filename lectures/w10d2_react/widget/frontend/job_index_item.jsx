import React from 'react';

const JobIndexItem = ({ company,title,type,location }) => {
    // if (!props.listing) return null;
    let colorClass = 'red';
    if (title.includes("Senior")) {
        colorClass = 'green';
    }
    return(
        <li>
            <dl>
                {company}
                <dd>{location}</dd>
                <dd className={colorClass}>{title}</dd>
                <dd>{type}</dd>
            </dl>
        </li>
    )   

}

// const JobIndexItem = (props) => {
    // if (!props.listing) return null;
    
    // return(
    //     <li>{props.listing.company}</li>
    // )   

export default JobIndexItem;