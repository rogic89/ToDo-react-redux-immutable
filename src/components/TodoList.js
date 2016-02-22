import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import Todo from './Todo';

export default class TodoList extends PureComponent {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  filterTodoList() {
    switch (this.props.activeFilter) {
      case 'completed':
        return this.props.todoList.filter(todo => todo.get('isCompleted'));
      case 'active':
        return this.props.todoList.filterNot(todo => todo.get('isCompleted'));
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
                    todo={todo}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
