import React from 'react'

class TeaForm extends React.Component {
    constructor(props) {
        super(props);

        // local state
        // mimics a tea object
        this.state = {
            id: Math.floor(Math.random() * 1000000), // simulating id normally given to us from backend
            flavor: '',
            amount: ''
        }

        this.updateFlavor = this.updateFlavor.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateFlavor(e) {
        // event handler, will be invoked when flavor input is updated
        this.setState({ flavor: e.target.value });
    }

    updateAmount(e) {
        // event handler, will be invoked when flavor input is updated
        this.setState({ amount: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent http request from being sent

        // dispatch action to send to to our redux state
        this.props.callReceiveTea(this.state);

        // reset the form after submitting
        this.setState({
            id: Math.floor(Math.random() * 1000000), // simulating id normally given to us from backend
            flavor: '',
            amount: ''
        });
    }

    render() {

        return (
            <div>
                <h1>THE FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Flavor:
                        <input 
                            type="text" 
                            value={this.state.flavor} 
                            onChange={this.updateFlavor}
                        />
                    </label>

                    <label>Amount:
                        <input 
                            type="text" 
                            value={this.state.amount} 
                            onChange={this.updateAmount}
                        />
                    </label>

                    <input type="submit" value="Add Tea" />
                </form>
            </div>
        )
    }
}

export default TeaForm;