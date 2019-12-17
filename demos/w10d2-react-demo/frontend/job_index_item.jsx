import React from 'react';

// listing === props.listing
const JobIndexItem = ({ listing }) => {

    return (
        <li>
            <dl>
                <dd>{listing.company}</dd>
                <dd>{listing.location}</dd>
                <dd>{listing.title}</dd>
            </dl>
        </li>
    );
}

export default JobIndexItem;