import React from 'react'
import JobIndexItem from './jobindexitem'


const JobIndex = (props) => {
        return (
            <>
                {props.jobs.map(((listing, idx) => (
                    <ul key={idx}>
                        <JobIndexItem banana={listing}/>
                    </ul>
                )))}
            </>
        )
}


export default JobIndex