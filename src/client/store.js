import { applyMiddleware, compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';
import rootReducer from './reducers';
import routes from './routes';

export default function configureStore(initialState, debug = false) {
  let createStoreWithMiddleware;
  const middleware = applyMiddleware(thunk);

  if (debug) {
    createStoreWithMiddleware = compose(middleware, reduxReactRouter({ routes, createHistory }), devTools());
  } else {
    createStoreWithMiddleware = compose(middleware, reduxReactRouter({ routes, createHistory }));
  }

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
