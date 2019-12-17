import React from 'react';
import JobIndexItem from './job_index_item';

const JobIndex = props => {

    return (
        <ul>
            {
                props.listings.map(listing => {

                    return (
                        <JobIndexItem listing={listing} key={listing.id}/>
                    );
                })
            }
        </ul>
    );
};

export default JobIndex;