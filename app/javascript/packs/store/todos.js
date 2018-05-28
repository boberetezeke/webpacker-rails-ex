import { TodoConstants } from '../constants/todo_constants';

export function todos(state = {loaded: false, todos: []}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ],
        loaded: state.loaded
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.map(todo =>
          (todo.id == action.id) ?
            {...todo, completed: !todo.completed} :
            todo
        ),
        loaded: state.loaded
      }
    case 'LOAD_REMOTE_TODOS':
      return {
        todos: state.todos.concat(action.todos),
        loaded: true
      }

    default:
      return state
  }
}

export default todos