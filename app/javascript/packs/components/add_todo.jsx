import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from "../services/todo_service";

export const addTodo = text => {
  return dispatch => {
    createTodo({text: text, completed: false}).then((response) => {
      if (response.ok) {
        response.json().then(json => {
          dispatch({
            type: 'ADD_TODO',
            id: json.id,
            text: json.text,
            completed: json.completed
          })
        })
      }
    })
  }
};

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);