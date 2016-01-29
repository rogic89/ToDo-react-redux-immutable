import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    // immutableJS will change `todo` object reference only if some change occur
    // so it is safe to place equality check on that object
    return this.props.todo !== nextProps.todo;
  }

  filterTodos() {
    switch (this.props.todos.get('activeFilter')) {
    case 'completed':
      return this.props.todos.get('todos').filter(todo => todo.get('isCompleted'));
    case 'active':
      return this.props.todos.get('todos').filter(todo => !todo.get('isCompleted'));
    default:
      return this.props.todos.get('todos');
    }
  }

  render() {
    const todos = this.filterTodos();
    return (
      <div>
        {!!todos.size && (
          <ul className="list-group">
            {todos.map(todo => {
              return (
                <Todo key={todo.get('id')}
                    dispatch={this.props.dispatch}
                    todo={todo}/>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
