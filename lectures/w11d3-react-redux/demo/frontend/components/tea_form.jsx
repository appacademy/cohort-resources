import React from "react";

class TeaForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: Math.floor(Math.random() * 10000000),
            flavor: "",
            amount: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateAmount = this.updateAmount.bind(this)
        this.updateFlavor = this.updateFlavor.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.receiveTea(this.state);
        this.setState({
            id: Math.floor(Math.random() * 10000000),
            flavor: "",
            amount: ""
        })
    }

    updateFlavor(e){
        this.setState({flavor: e.target.value})
    }

    updateAmount(e){
        this.setState({amount: e.target.value})
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Create a new Tea:</h1>
                <label>Flavor
                    <input type="text" value={this.state.flavor} onChange={this.updateFlavor}/>
                </label>
                <label>Amount
                    <input type="text" value={this.state.amount} onChange={this.updateAmount} />
                </label>
                <input type="submit" value="Create Tea" />
            </form>
        )
    }
}

export default TeaForm;