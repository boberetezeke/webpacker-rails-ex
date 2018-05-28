import React from 'react'
import { connect } from 'react-redux'

let nextTodoId = 0
export const addTodo = text => {
  return dispatch => {
    window.setTimeout(() => {
      dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
      })
    }, 2000)
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