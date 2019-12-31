import React from 'react';

// Components
import StepListContainer from '../step_list/step_list_container';

class TodoShow extends React.Component {

  componentDidMount() {
    // Fetches the todo on mount
    // Note: this will not fetch a new todo if you change the URL
    // manually, as the component will not be mounted again
    this.props.fetchTodo();
    this.props.requestSteps();
  }

  render() {
    const { todo, destroyTodo } = this.props;
    if (todo === undefined) return null;
    return(
      <div>
        <p className="todo-body">{todo.body}</p>
        <StepListContainer todo_id={todo.id} />
        <button className="delete-button" onClick={ () => destroyTodo(this.props.todo) }>
          Delete Todo
        </button>
        <ul className="tag-list">
          { todo.tags.map(tag => <li key={ tag.id }>{ tag.name }</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoShow;
