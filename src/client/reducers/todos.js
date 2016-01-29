import * as types from 'constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  todos: [],
});

export default function todos(state = initialState, action) {
  switch (action.type) {
  case types.GET_TODOS:
    // must be `mergeDeep` instead of `merge` because `todos` is nested data and simple `merge` will replace entire array and will not perserve reference
    // try placing `merge` instead and check console.count inside `ToDo` component
    return state.mergeDeep({
      todos: action.todos,
    });

  case types.COMPLETE_TODO:
    return state.mergeDeepIn(['todos', action.index], {
      isCompleted: !action.isCompleted,
    });

  case types.DELETE_TODO:
    return state.deleteIn(['todos', action.index]);

  case types.DELETE_ALL_TODOS:
    return initialState;

  default:
    return state;
  }
}

