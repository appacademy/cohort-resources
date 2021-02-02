import React from 'react';

class TeaForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flavor: '',
			amount: '',
			description: ''
		}
		this.updateFlavor = this.updateFlavor.bind(this);
		this.updateAmount = this.updateAmount.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateFlavor(e) {
		this.setState({ flavor: e.target.value });
	}

	updateAmount(e) {
		this.setState({ amount: e.target.value })
	}

	updateDescription(e) {
		this.setState({ description: e.target.value })
	}

	handleSubmit(e) {
		// default form behavior is to submit a get request with query string added to URL
		e.preventDefault();

		this.props.createTea(this.state);
			
	}

	render() {
		return(
			<form className="tea-form" onSubmit={this.handleSubmit}>
				<h1>Add Tea</h1>

				<label>Flavor
						<input onChange={this.updateFlavor} type="text" value={this.state.flavor}/>
				</label>

				<label>Amount
						<input onChange={this.updateAmount} type="text" value={this.state.amount}/>
				</label>

				<label>Description
						<input onChange={this.updateDescription} type="text" value={this.state.description}/>
				</label>

				<input type="submit" value="Add Tea"></input>
			</form>
		)
	}
}

export default TeaForm;