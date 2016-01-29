import * as types from 'constants/ActionTypes';
// import * as API from 'services/API';

const sampleTodos = [{
  id: 1,
  text: 'todo1',
  isCompleted: false,
}, {
  id: 2,
  text: 'todo2',
  isCompleted: false,
},
];

const __getTodos = () => ({ type: types.GET_TODOS });
const __getTodosSuccess = todos => ({ type: types.GET_TODOS_SUCCESS, todos });
// const __getTodosError = error => ({ type: types.GET_TODOS_ERROR, error });

export function getTodos() {
  return d => {
    d(__getTodos());
    d(__getTodosSuccess(sampleTodos));
      // return API.getTodos()
      //   .then(todos => d(__getTodosSuccess(todos)))
      //   .catch(error => d(__getTodosError(error)));
  };
}
