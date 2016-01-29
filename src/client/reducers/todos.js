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
      todos: state.get('todos').map(todo => {
        if (todo.get('id') === action.id) {
          return todo.set('isCompleted', !todo.get('isCompleted'));
        }
        return todo;
      }),
    });

  case types.DELETE_TODO:
    let deleteIndex;
    state.get('todos').map((todo, index) => {
      if (todo.get('id') === action.id) {
        deleteIndex = index;
      }
      return todo;
    });

    return state.deleteIn(['todos', deleteIndex]);

  case types.DELETE_ALL_TODOS:
    return initialState;

  case types.CHANGE_FILTER:
    return state.set('activeFilter', action.filter);

  default:
    return state;
  }
};

