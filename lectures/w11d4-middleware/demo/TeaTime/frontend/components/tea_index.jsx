import React from "react";
import TeaForm from "./tea_form";

// lets pretend we have teas in our props

class TeaIndex extends React.Component {
    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchAllTeas();
    }

    render() {
        return (
            <div>
                <h1>ALL THE TEAS</h1>
                <ul>
                    {this.props.teas.map(tea => (
                        <li key={tea.id}>Flavor: {tea.flavor}</li>
                    ))}
                </ul>
                <TeaForm createTea={this.props.createTea} receiveTea={this.props.receiveTea}/>
            </div>
        );
    }
};

export default TeaIndex;