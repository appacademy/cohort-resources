import React from 'react';
import TeaIndexItem from './tea_index_item';
import TeaForm from './tea_form';

const TeaIndex = (props) => {
    return (
        <div>
            <h1>All the teas</h1>
            <TeaForm receiveTea={props.receiveTea}/>
            <ul>
                {
                    props.teas.map(tea => 
                        <TeaIndexItem tea={tea} key={tea.id}/>
                        )
                }
            </ul>
        </div>
    )
}

export default TeaIndex;