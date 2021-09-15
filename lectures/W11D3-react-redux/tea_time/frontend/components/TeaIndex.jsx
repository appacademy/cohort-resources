import React from "react";
import TeaForm from "./TeaForm";


const TeaIndex = (props) => {
    // console.log(props.receivedTea)

    return (
        <div>
            <h1>These are all the teas...</h1>
            <ul>
                {
                    props.teas.map((tea,i )=> <li key={i}>{tea.flavor }</li>)
                }
            </ul>
            <h2>Tea Form</h2>
            <TeaForm receivedTea={props.receivedTea} />
        </div>
    )
}

export default TeaIndex;