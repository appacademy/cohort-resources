import React from 'react';
import JobIndexItem from './job_index_item';

const JobIndex = (props) => {
    const jobsArr = props.listings.map((listing) => {
                        // must return in a map!!
                        return(
                            // <li>{listing.company}</li>
                            <JobIndexItem 
                                key={listing.id} 
                                company={listing.company} 
                                title={listing.title}
                                type={listing.type}
                                location={listing.location}
                            />
                        );
                    });
    return(
        <ul>
            {jobsArr}
        </ul>
    )
}

export default JobIndex;