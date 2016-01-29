import * as types from 'constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  todos: [],
});

// I could have made initialState to look like:
// const initialState = fromJS([]);
// and it would work well for this case, but in a real app you will most likely have initialState looking like:
// const initialState = fromJS({
//   isFetching: false,
//   success: false,
//   error: false,
//   todos: [],
// });

export default (state = initialState, action) => {
  switch (action.type) {
  case types.GET_TODOS:
    // must use `mergeDeep` instead of `merge` because `todos` is nested data and simple `merge` will replace entire array and will not perserve reference
    // try placing `merge` instead, click `Refresh` button and check console.info inside `ToDo` component
    return state.mergeDeep({
      todos: action.todos,
    });

    // return state.setIn(['todos'], fromJS(action.todos));  // setting data like this will result in re-render

  case types.ADD_TODO:
    const todos = state.get('todos').push(fromJS({
      id: action.id,
      text: action.text,
      isCompleted: false,
    }));
    return state.mergeDeep({todos});

  case types.COMPLETE_TODO:
    return state.setIn(['todos', action.index, 'isCompleted'], !action.isCompleted);

  case types.DELETE_TODO:
    return state.deleteIn(['todos', action.index]);

  case types.DELETE_ALL_TODOS:
    return initialState;

  default:
    return state;
  }
};

