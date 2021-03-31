import React from 'react';

class TodoShow extends React.Component {

  componentDidMount() {
    this.props.fetchTodo();
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

      </div>
    );
  }
}

export default TodoShow;
