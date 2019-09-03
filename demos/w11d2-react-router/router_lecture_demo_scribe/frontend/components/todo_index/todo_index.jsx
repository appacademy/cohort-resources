import React from 'react';
// Components
import TodoIndexItem from './todo_index_item';

class TodoIndex extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, updateTodo } = this.props;

    return(
      <div>
        <ul className="todo-list">
          {
            todos.map(todo => (
              <TodoIndexItem
                key={ todo.id }
                todo={ todo }
                updateTodo={ updateTodo } />
              )
            )
          }
        </ul>
      </div>
    );
  }
}

export default TodoIndex;
