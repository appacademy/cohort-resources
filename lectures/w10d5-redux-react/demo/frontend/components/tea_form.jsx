import React from 'react';

class TeaForm extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            flavor: "",
            amount: "",
            id: Math.floor(Math.random() * 1000000)
        };
        this.updateFlavor = this.updateFlavor.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const tea = Object.assign({}, this.state);
        this.props.receiveNewTea(tea);
        this.setState({
            flavor: "",
            amount: "",
            id: Math.floor(Math.random() * 1000000)
        })
    }

    updateFlavor(e) {
        this.setState({flavor:e.target.value})
    }
    
    updateAmount(e) {
        this.setState({amount:e.target.value})
    }
    render() {
        debugger
        return (
            <form onSubmit={ this.handleSubmit} >
                <h4>Add a Tea</h4>
                <label>
                    Flavor:
                     <input type="text" value={this.state.flavor} onChange={this.updateFlavor}/>
                </label>
                <label>
                    Amount:
                     <input type="text" value={this.state.amount} onChange={ this.updateAmount}/>
                </label>
                <input type="submit" value="Add Tea!" />
            </form>
        )
    }
}

export default TeaForm;