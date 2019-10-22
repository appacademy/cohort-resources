import React from 'react';
import JobIndexItem from './jobIndexItem';

const JobIndex = ({jobs}) => {
    
    return (
        <ul>
            {jobs.map(listing => 
                <JobIndexItem key={listing.id}
                    title={listing.title}
                    company={listing.company}
                    location={listing.location}
                    type={listing.type} />)
            }
        </ul>    
    );

}

export default JobIndex;

// Common Bugs to Make

//importing props