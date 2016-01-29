import * as types from 'constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  activeFilter: 'all',
  todos: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_TODO:
    return state.mergeDeep({
      todos: state.get('todos').push(fromJS({
        id: action.id,
        text: action.text,
        isCompleted: false,
      })),
    });

  case types.COMPLETE_TODO:
    return state.mergeDeep({
      // map through todos to find matching ID
      todos: state.get('todos').map(todo => {
        if (todo.get('id') === action.id) {
          return todo.set('isCompleted', !todo.get('isCompleted'));
        }
        return todo;
      }),
    });

  case types.DELETE_TODO:
    return state.mergeDeep({
      todos: state.get('todos').filter(todo => todo.get('id') !== action.id),
    });

  case types.DELETE_ALL_TODOS:
    return initialState;

  case types.CHANGE_FILTER:
    console.info('%cFilter changed: ' + action.filter.toUpperCase(), 'color: red;font-weight:bold;');
    return state.set('activeFilter', action.filter);

  default:
    return state;
  }
};

