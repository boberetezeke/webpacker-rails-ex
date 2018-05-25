import React from 'react'
import Todos from './todos'

import { Router, Route, Link, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import { rootReducer } from "../store/root_reducer";

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware
  )
)

const history = createBrowserHistory();

// <Router history={history}>

const Routes = props => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Todos}/>
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
