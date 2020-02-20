import React from 'react';

const TeaListItem = (props) => {
    return (
        <li>
            {props.tea.flavor}: {props.tea.description}
        </li>
    )
}

export default TeaListItem