import React from 'react';
import TeaIndexItem from './tea_index_item';
import TeaForm from './tea_form';

const TeaIndex = ({ teas, callReceiveTea }) => {
    // console.log(teas);
    return (
        <div>
            <h1>THE TEA INDEX</h1>
            <ul>
                {teas.map(tea => (
                    <TeaIndexItem tea={tea} key={tea.id} />
                ))}
            </ul>

            <TeaForm callReceiveTea={callReceiveTea} />
        </div>
    )
}

export default TeaIndex;