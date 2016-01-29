import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, deleteAllTodos, completeTodo, addTodo } from 'actions/todos';
import PureComponent from './PureComponent';
// import { Button, Input, ListGroup, ListGroupItem } from 'react-bootstrap';
import cn from 'classnames';

class Todos extends PureComponent {

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  addTodo(e) {
    e.preventDefault();
    const input = this.refs.todo;
    this.props.dispatch(addTodo(input.value.trim()));
    input.value = '';
  }

  render() {
    const todos = this.props.todos.get('todos');
    return (
      <div className="todos-wrapper">
        <h2>ToDo</h2>
        <form onSubmit={e => this.addTodo(e)}>
          <input className="form-control" type="text" placeholder="Enter ToDo" ref="todo"/>
        </form>
        <br/>
        {todos.size ? (
          <div className="list-group">
            {todos.map((todo, index) => {
              return (
                <Todo key={todo.get('id')}
                    index={index}
                    dispatch={this.props.dispatch}
                    todo={todo}/>
              );
            })}
          </div>
        ) : (
          <div>
            <p>You have no Todos</p>
            <hr/>
          </div>
        )}
        <button className="btn btn-primary" onClick={() => this.props.dispatch(getTodos())}>Reset</button>
        <button className="btn btn-danger pull-right" onClick={() => this.props.dispatch(deleteAllTodos())}>
          Delete all
        </button>
      </div>
    );
  }
}

class Todo extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  componentWillMount() {
    console.info('ToDo initial render');
  }

  shouldComponentUpdate(nextProps) {
    // immutableJS will change `todo` object reference only if some change occur
    // so it is safe to place equality check on that object
    return this.props.todo !== nextProps.todo;
  }

  componentWillUpdate(nextProps) {
    console.info('ToDo will update - ID: ' + nextProps.todo.get('id'));
  }

  componentWillUnmount() {
    console.info('ToDo unmounting - ID: ' + this.props.todo.get('id'));
  }

  render() {
    const isCompleted = this.props.todo.get('isCompleted');
    const classNames = cn('todo', {
      completed: isCompleted,
    });
    return (
      <div className="list-group-item">
        <span className={classNames}
            onClick={() => this.props.dispatch(completeTodo(this.props.index, isCompleted))}>
          {this.props.todo.get('text')}
        </span>
        <div className="close"
            onClick={() => this.props.dispatch(deleteTodo(this.props.index))}>
          &times;
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(mapStateToProps)(Todos);
