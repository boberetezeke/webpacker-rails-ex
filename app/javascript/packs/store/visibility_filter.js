import { VisibilityFilters } from "../constants/todo_constants";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter