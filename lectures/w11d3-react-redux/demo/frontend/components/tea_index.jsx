import React from 'react';
import TeaForm from './tea_form';

const TeaIndex = (props) => {
    // debugger;
    return (
        <div>
            <h2>All Teas</h2>
            <ul>
                {
                    props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}</li>)
                }
            </ul>
            <h3>Green Teas</h3>
            <ul>
                {
                    props.greenTeas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}, ID: {tea.id}</li>)
                }
            </ul>
            <h3>Black Teas</h3>
            <ul>
                {
                    props.blackTeas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}, Amount: {tea.amount}, ID: {tea.id}</li>)
                }
            </ul>
            <TeaForm receiveTea={props.receiveTea}/>
        </div>
    )
}

export default TeaIndex;