import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import 'babel/polyfill';

// window.__INITIAL_STATE__ is server-injected for isomorphic applications
const store = configureStore(window.__INITIAL_STATE__, __DEBUG__);

const node = (
  <App store={store}
      debug={__DEBUG__}
      debugExternal={__DEBUG_NW__}/>
);

ReactDOM.render(node, document.getElementById('todo'));
