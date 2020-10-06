import { connect } from "react-redux";
import TodoShow from "./todo_show";
// Actions
import { deleteTodo, fetchTodo } from "../../actions/todo_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  let todo = state.todos[ownProps.match.params.id];
  return {
    todo: todo,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoShow);
