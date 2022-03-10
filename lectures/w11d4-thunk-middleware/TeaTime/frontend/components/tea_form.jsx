import React from 'react';

class TeaForm extends React.Component {
    constructor(props) {
        // debugger;
        super(props)
        this.state = {
            flavor: '',
            amount: ''
        }

        this.updateAmount = this.updateAmount.bind(this);
        this.updateFlavor = this.updateFlavor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    updateFlavor(e) {
        this.setState({flavor: e.target.value})
    }

    updateAmount(e) {
        this.setState({amount: e.target.value})
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.props.createTea(this.state);
        debugger;
        this.setState({
            flavor: '',
            amount: ''
        });
    }

    render() {
        // debugger;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add A Tea</h3>
                <label>Flavor:
                    <input
                        type="text"
                        value={this.state.flavor}
                        onChange={this.updateFlavor}
                    />
                </label>
                <br />
                <label>Amount:
                    <input
                        type="text"
                        value={this.state.amount}
                        onChange={this.updateAmount}
                    />
                </label>
                <br />
                <input type="submit" value="Add Tea" />
            </form>
        )
    }
}

export default TeaForm