import * as types from 'constants/ActionTypes';

let id = 4;
const __getTodos = todos => ({ type: types.GET_TODOS, todos });

export function getTodos() {
  const sampleTodos = [
    {
      id: 1,
      text: 'todo1',
      isCompleted: false,
    }, {
      id: 2,
      text: 'todo2',
      isCompleted: true,
    }, {
      id: 3,
      text: 'todo3',
      isCompleted: true,
    }, {
      id: 4,
      text: 'todo4',
      isCompleted: true,
    },
  ];
  return d => {
    d(__getTodos(sampleTodos));
  };
}


export const addTodo = text => {
  id++;
  return { type: types.ADD_TODO, text, id };
};
export const deleteTodo = index => ({ type: types.DELETE_TODO, index });
export const deleteAllTodos = () => ({ type: types.DELETE_ALL_TODOS });
export const completeTodo = (index, isCompleted) => ({ type: types.COMPLETE_TODO, index, isCompleted });
