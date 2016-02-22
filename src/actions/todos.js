import * as types from 'constants/ActionTypes';

let idCounter = 0;
export const addTodo = text => ({ type: types.ADD_TODO, text, id: ++idCounter });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const changeFilter = filter => ({ type: types.CHANGE_FILTER, filter });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const deleteAllTodos = () => {
  idCounter = 0;
  return { type: types.DELETE_ALL_TODOS };
};
