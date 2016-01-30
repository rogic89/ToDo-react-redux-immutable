import * as types from 'constants/ActionTypes';
import { List, Map } from 'immutable';

const initialState = {
  activeFilter: 'all',
  todoList: List(),
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_TODO:
    state.todoList = state.todoList.push(Map({
      id: action.id,
      text: action.text,
      isCompleted: false,
    }));

    return {...state};

  case types.COMPLETE_TODO:
    state.todoList = state.todoList.map(todo => {
      if (todo.get('id') === action.id) {
        return todo.set('isCompleted', !todo.get('isCompleted'));
      }
      return todo;
    });

    return {...state};

  case types.DELETE_TODO:
    state.todoList = state.todoList.filter(todo => todo.get('id') !== action.id);
    return {...state};

  case types.DELETE_ALL_TODOS:
    state.todoList = state.todoList.clear();
    return {...state};

  case types.CHANGE_FILTER:
    console.info('%cFilter changed: ' + action.filter.toUpperCase(), 'color:red; font-weight:bold;');
    state.activeFilter = action.filter;
    return {...state};

  default:
    return state;
  }
};

