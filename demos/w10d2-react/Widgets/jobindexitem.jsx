import React from 'react';

const JobIndexItem = ({banana}) => {
    debugger
    return(
        <>
            <li>{banana.location}</li>
            <li>{banana.type}</li>
            <li>{banana.title}</li>
        </>
    )
}

export default JobIndexItem