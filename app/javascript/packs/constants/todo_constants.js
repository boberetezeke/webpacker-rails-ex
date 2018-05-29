export const TodoConstants = {
  ADD: 'TODO_ADD',
  DELETE: 'TODO_DELETE',
  COMPLETE: 'TODO_COMPLETE'
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const toggleTodoAction = id => ({
  type: 'TOGGLE_TODO',
  id
});

