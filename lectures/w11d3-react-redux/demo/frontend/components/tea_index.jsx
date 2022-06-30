import React from "react";
import TeaForm from "./tea_form";

const TeaIndex = (props) => {
    return(
        <div>
            <h1>All of our teas:</h1>
            <ul>
                {props.teas.map((tea) => {
                    return(
                        <li key={tea.id}>
                            {`Tea: ${tea.flavor}  |  Amount: ${tea.amount}`}                        </li>
                    )
                })}
            </ul>
            <TeaForm receiveTea={props.receiveTea} />
        </div>
    )
}

export default TeaIndex;