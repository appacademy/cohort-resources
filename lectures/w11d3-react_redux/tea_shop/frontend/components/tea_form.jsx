import React from 'react'; 

class TeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flavor: "",
            cost: "", 
            id: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFlavor = this.updateFlavor.bind(this);
        this.updateCost = this.updateCost.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // invoke action creator with tea object (from component state) passed in
        let tea = this.state;
        this.props.receiveTea(tea);
        // clears inputs and change id
        this.setState({
            flavor: "", 
            cost: "", 
            id: this.state.id + 1
        });
    }

    updateFlavor(e) {
        this.setState({
            flavor: e.target.value
        });
    }

    updateCost(e) {
        this.setState({
            cost: e.target.value
        });
    }
    
    render() {
        console.log(this.state);
        return (
            <>
                <h1>Create a new Tea</h1>
                <form onSubmit={this.handleSubmit} >
                    {/* value of <input/> will reflect something from the component's state */}
                    {/* user entered text will change the component's state and NOT the input value */}
                    {/* result => user enters text which will setState for component's state which rerenders component and updates the input's value */}
                    <label>Flavor
                        <input type="text" onChange={this.updateFlavor} value={this.state.flavor} />
                    </label>

                    <label>Cost
                        <input type="text" onChange={this.updateCost} value={this.state.cost} />
                    </label>

                    <input type="submit" value="SUBMIT"/>
                </form>
            </>
        );
    }
}

export default TeaForm;