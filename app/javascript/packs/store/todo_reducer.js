import { TodoConstants } from '../constants/todo_constants';

export function todoReducer(state = {}, action) {
  switch (action.type) {
    case TodoConstants.ADD:
      return {
        type: action.type
      };
    case TodoConstants.DELETE:
      return {
        type: action.type
      };
    case TodoConstants.COMPLETE:
      return {
        type: action.type
      };
    default:
      return state
  }
}