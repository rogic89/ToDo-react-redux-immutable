import React, { PropTypes } from 'react';
import { deleteTodo, completeTodo } from 'actions/todos';
import PureComponent from './PureComponent';
import cn from 'classnames';

export default class Todo extends PureComponent {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    console.info('%cToDo mounting- ID: ' + this.props.todo.get('id'), 'color:green; font-weight:bold;');
  }

  componentWillUpdate(nextProps) {
    console.info('%cToDo updating - ID: ' + nextProps.todo.get('id'), 'color:blue; font-weight:bold;');
  }

  componentWillUnmount() {
    console.info('%cToDo unmounting - ID: ' + this.props.todo.get('id'), 'color:orange; font-weight:bold;');
  }

  render() {
    const { id, text, isCompleted } = this.props.todo.toObject();
    const classNames = cn('todo', {
      completed: isCompleted,
    });
    return (
      <li className="list-group-item">
        <span className={classNames}
            onClick={() => this.props.dispatch(completeTodo(id))}>
          {text}
        </span>
        <div className="close"
            onClick={() => this.props.dispatch(deleteTodo(id))}>
          &times;
        </div>
      </li>
    );
  }
}
