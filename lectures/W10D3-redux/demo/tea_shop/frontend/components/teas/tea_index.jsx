import React from 'react';
import TeaIndexItem from './tea_index_item';

const TeaIndex = (props) => {
    console.log(props.teas);
    return (
        <div>
            <h1>THE TEA INDEX</h1>
            <ul>
                {props.teas.map(tea => (
                    <TeaIndexItem tea={tea} key={tea.id}/>
                ))}
            </ul>
        </div>
    )
}

export default TeaIndex;