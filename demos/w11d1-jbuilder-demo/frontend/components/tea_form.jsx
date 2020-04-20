import React from 'react';

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: '',
      amount: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTea(this.state)
      .then(() => this.setState({ flavor: '', amount: '', description: '' }));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <>
        <h1>Add Tea</h1>
        <form onSubmit={this.handleSubmit} className="tea-form">
          <label>
            Flavor:
            <input
              type="text"
              value={this.state.flavor}
              onChange={this.update('flavor')}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.update('amount')}
            />
          </label>
          <label>
            Description:
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>
          <input type="submit" value="Add Tea" />
        </form>
      </>
    )
  }
}

export default TeaForm;