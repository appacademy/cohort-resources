import React from "react";
import TeaListItem from './tea_list_item';
import TeaForm from './tea_form';

const TeaList = (props) => {
    const teaList = props.teas.map((tea) => {
        return (
            <TeaListItem key={tea.id} tea={tea}/>
        )
    })
    return (
        <div>
            <marquee>Tea Inventory - Enjoy my Moves (;</marquee>
            <TeaForm addTea={props.addTea}/>
            <ul>
                {teaList}
            </ul>
            
        </div>
    )
}

export default TeaList