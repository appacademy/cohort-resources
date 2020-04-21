import React from 'react';

// Components
import StepListContainer from '../step_list/step_list_container';

class TodoShow extends React.Component {

  componentDidMount() {
    this.props.fetchTodo();
    this.props.requestSteps();
  }

  render() {
    // console.log(this.props);
    const { todo, destroyTodo } = this.props;
    if (todo === undefined) return null;
    
    return (
      <div className="show">
        <div className="show-body">
          Todo:
          <p> {todo.body}</p>
        </div>

        <div>
          <button
            className="delete-button"
            onClick={() => destroyTodo(this.props.todo)}
          >
            Delete Todo
          </button>
        </div>

        <div className="show-body">
          <StepListContainer todo_id={todo.id} />
        </div>

        <div>
          <ul className="tag-list">
            {todo.tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoShow;
