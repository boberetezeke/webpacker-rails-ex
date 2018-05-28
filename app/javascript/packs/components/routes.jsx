import React from 'react'
import VisibleTodos from './visible_todos'

import { Router, Route, Link, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import { rootReducer } from "../store/root_reducer";
import { VisibilityFilters } from "../constants/todo_constants";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

window.setTimeout(() => {
  console.log("initial load done")
  store.dispatch({
    type: 'LOAD_REMOTE_TODOS',
    todos: [
      {
        id: 10,
        text: 'loaded todo',
        completed: false
      }
    ]
  })
}, 2000)

const history = createBrowserHistory();

// <Router history={history}>

const Routes = props => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={VisibleTodos}/>
      </Switch>
    </Router>
  </Provider>
)

/*
const Routes = props => (
  <Todos />
)
*/

export default Routes;
