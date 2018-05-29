import React from 'react'
import VisibleTodos from './visible_todos'

import { Router, Route, Link, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import { rootReducer } from "../store/root_reducer";
import { getTodos } from "../services/todo_service"

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

// get initial state
getTodos(store);

const history = createBrowserHistory();

const Routes = props => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={VisibleTodos}/>
      </Switch>
    </Router>
  </Provider>
)

export default Routes;
