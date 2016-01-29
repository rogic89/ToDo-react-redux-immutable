import * as types from 'constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  success: false,
  todos: [],
});

export default function todos(state = initialState, action) {
  switch (action.type) {
  case types.GET_TODOS:
    return state.merge({
      isFetching: true,
      error: false,
    });

  case types.GET_TODOS_ERROR:
    return state.merge({
      isFetching: false,
      error: 'error happened',
    });

  case types.GET_TODOS_SUCCESS:
    // must be `mergeDeep` instead of `merge` because `todos` is nested data and simple `merge` will replace entire array and will not perserve reference
    // try placing `merge` instead and check console.count inside `ToDo` component
    return state.mergeDeep({
      isFetching: false,
      success: true,
      todos: action.todos,
    });

  default:
    return state;
  }
}

