import React from 'react'
import Hello from './hello'
import MyButton from './my_button'
import { connect } from 'react-redux';
import Todo from './todo';

/*
const Todos = props => (
  <div>
    <Hello name="Steve" />
    <MyButton name="Button Yay!" />
  </div>
)*/

const Todos = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default Todos;
