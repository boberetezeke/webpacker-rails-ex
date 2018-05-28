import React from 'react'
import Hello from './hello'
import MyButton from './my_button'
import { connect } from 'react-redux';
import Todo from './todo';
import AddTodo from './add_todo';

/*
const Todos = props => (
  <div>
    <Hello name="Steve" />
    <MyButton name="Button Yay!" />
  </div>
)*/

const Todos = ({ todos, toggleTodo }) => (
  <div>
    <ul>
      {todos.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
    <AddTodo/>
  </div>
)

export default Todos;
