export const getTodos = (store) =>
{
  const requestOptions = {
    method: 'GET',
    headers: {'Accept': 'application/json'},
    body: {}
  };

  fetch('/api/v1/todos', requestOptions)
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log("json: " + JSON.stringify(json))

          store.dispatch({
            type: 'LOAD_REMOTE_TODOS',
            todos: json
          })
        })
      }
    })
}

export const createTodo = (todo) =>
{
  const requestOptions = {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({todo: todo})
  };

  return fetch('/api/v1/todos', requestOptions)
}

export const toggleTodo = (id) =>
{
  const requestOptions = {
    method: 'PUT',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  };

  return fetch(`/api/v1/todos/${id}/toggle`, requestOptions)
}
