import React from 'react';

const TeaIndexItem = ({ tea }) => {
    // equivalent to doing let tea = props.tea
    return (
        <li>
            <ul>
                <li>Flavor: {tea.flavor}</li>
                <li>Amount: {tea.amount}</li>
            </ul>
        </li>
    )
}

export default TeaIndexItem;