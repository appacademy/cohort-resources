import React from "react";
import TeaForm from "./tea_form";

// lets pretend we have teas in our props

const TeaIndex = (props) => {
    return (
        <div>
            <h1>ALL THE TEAS</h1>
            <ul>
                {props.teas.map(tea => (
                    <li key={tea.id}>Flavor: {tea.flavor}</li>
                ))}
            </ul>
            <TeaForm receiveTea={props.receiveTea}/>
        </div>
    );
};

export default TeaIndex;