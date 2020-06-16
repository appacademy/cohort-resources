import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      todo_id: this.props.todo_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state);
    this.props.createStep(this.props.todo_id, step).then(
      this.setState({
        title: "",
        body: ""
      }) // reset form
    );
  }

  render() {
    return (
      <form className="step-form" onSubmit={ this.handleSubmit }>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="walk to store"
            onChange={ this.update('title') }
            required />
        </label>
        <label>Description:
          <input
            className="input"
            ref="body"
            value={ this.state.body }
            placeholder="google store directions"
            onChange={ this.update('body') }
            required />
        </label>
        <button className="create-button">Create Step!</button>
      </form>
    );
  }
}

export default StepForm;
