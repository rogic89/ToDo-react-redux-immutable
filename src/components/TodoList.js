import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    // immutableJS will change `todo` object reference only if some change occur
    // so it is safe to place equality check on that object
    return this.props.todoList !== nextProps.todoList ||
           this.props.activeFilter !== nextProps.activeFilter;
  }

  filterTodoList() {
    switch (this.props.activeFilter) {
    case 'completed':
      return this.props.todoList.filter(todo => todo.get('isCompleted'));
    case 'active':
      return this.props.todoList.filter(todo => !todo.get('isCompleted'));
    default:
      return this.props.todoList;
    }
  }

  render() {
    const todoList = this.filterTodoList();
    return (
      <div>
        {!!todoList.size && (
          <ul className="list-group">
            {todoList.map(todo => {
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
