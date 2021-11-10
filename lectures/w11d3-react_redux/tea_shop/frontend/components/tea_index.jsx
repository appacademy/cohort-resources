import React from 'react';

import TeaForm from './tea_form';

const TeaIndex = (props) => {
    return (
        <div>
            <h1>These are all of our TEAS</h1>
            <ul>
                {
                    props.teas.map(tea => <li key={tea.id} >Flavor: {tea.flavor}</li>)
                }
            </ul>
            <TeaForm receiveTea={props.receiveTea} />
            
            <h1>Green Teas</h1>
            <ul>
                {
                    props.greenTeas.map(tea => <li key={tea.id} >Cost: {tea.cost}</li>)
                }
            </ul>
        </div>
    );
}

export default TeaIndex;