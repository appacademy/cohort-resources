import React from 'react';
import ErrorList from './error_list';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      tag_names: [],
      done: false,
      newTag: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  addTag(e) {
    this.setState({
      tag_names: [ ...this.state.tag_names, this.state.newTag ],
      newTag: ""
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo({ todo }).then(
      () => this.setState({
        title: "",
        body: "",
        tag_names: []
      })
    );
  }

  removeTag(idx) {
    this.setState({
      tag_names: this.state.tag_names.filter((_, index) => index !== idx)
    });
  }

  render() {
    const tag_names = this.state.tag_names.map((tag, idx) => {
      const clickHandler = () => this.removeTag(idx);
      return <li key={ idx } onClick={ clickHandler }>{ tag }</li>
    });

    return (
      <form className="todo-form" onSubmit={ this.handleSubmit }>
        <ErrorList errors={ this.props.errors } />
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="buy milk"
            onChange={ this.update('title') }
            />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={ this.state.body }
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={ this.update('body') }
            ></textarea>
        </label>
        <label>
          Tags
          <input
            className="input"
            placeholder="Enter a new tag"
            onChange={ this.update('newTag') }
            value={ this.state.newTag }/>
          <button type="button" className="button" onClick={ this.addTag }>
            Add Tag
          </button>
        </label>
        <ul className="tag-list">
          { tag_names }
        </ul>

        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
