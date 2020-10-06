import React from "react";
// Components
import TodoIndexItem from "./todo_index_item";

class TodoIndex extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, updateTodo } = this.props;
    let todoIndexItems = todos.map((todo) => (
      <TodoIndexItem key={todo.id} todo={todo} updateTodo={updateTodo} />
    ));

    let noTodosMsg = <h3> You have no to-dos. </h3>;
    let render = todoIndexItems.length === 0 ? noTodosMsg : todoIndexItems;
    return (
      <div className="todo-index">
        <h1>All Todo's</h1>
        <ul className="todo-list">
          <div className="sub-header">[Todo Index Container]</div>
          <div>{render}</div>
        </ul>
      </div>
    );
  }
}

export default TodoIndex;
