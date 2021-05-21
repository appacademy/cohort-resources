import React from 'react';
import TeaForm from './tea_form';

const TeaIndex = (props) => {
    debugger
    return (
        <>
            <h3>All of our delicious teas</h3>
            <ul>
                {props.teas.map((tea) => (<li key={tea.id}>Flavor: {tea.flavor}  Amount: {tea.amount}</li>))}
            </ul>
            <TeaForm receiveNewTea={props.receiveNewTea} />
            <h3>Green Teas</h3>
            <ul>
                {props.greenTeas.map((tea) => (<li key={tea.id}>Flavor: {tea.flavor}  Amount: {tea.amount}</li>))}
            </ul>
        </>
    )
}
 
export default TeaIndex;