import { Route, IndexRoute } from 'react-router';
import React from 'react';
import CoreLayout from './components/CoreLayout';
import TodoList from './components/TodoList';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={TodoList}/>
  </Route>
);
