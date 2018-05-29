import { connect } from 'react-redux'
import Todos from '../components/todos'
import { VisibilityFilters, toggleTodoAction } from "../constants/todo_constants";
import { toggleTodo } from "../services/todo_service";

export const toggleRemoteTodo = id => {
  // toggleTodo(id).then((response) => {
  //   if (response.ok) {
  //     response.json().then(json => {
  //       //dispatch(toggleTodoAction(todo.id))
  //     })
  //   }
  // })
  // return toggleTodoAction(id)

  return dispatch => {
    toggleTodo(id).then((response) => {
      if (response.ok) {
        response.json().then(json => {
          dispatch(toggleTodoAction(id))
        })
      }
    })
  }
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleRemoteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
