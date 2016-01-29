import { Route, IndexRoute } from 'react-router';
import React from 'react';
import CoreLayout from './components/CoreLayout';
import Todos from './components/Todos';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Todos}/>
  </Route>
);
