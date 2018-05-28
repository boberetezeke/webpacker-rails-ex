import { connect } from 'react-redux'
import Todos from '../components/todos'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

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
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  todos: getVisibleTodos([{text: 'todo 1', completed: true, key: 1}, {text: 'todo 2', completed: false, key: 2}], VisibilityFilters.SHOW_ALL)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
