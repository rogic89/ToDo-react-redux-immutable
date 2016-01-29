import React from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, deleteAllTodos, completeTodo } from 'actions/todos';
import PureComponent from './PureComponent';
import { Button, Input, ListGroup, ListGroupItem } from 'react-bootstrap';
import cn from 'classnames';

class Todos extends PureComponent {

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    const todos = this.props.todos.get('todos');
    return (
      <div className="todos-wrapper">
        <h2>ToDo</h2>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <Input type="text" placeholder="Enter ToDo" ref="todo"/>
        {todos.size && (
          <ListGroup>
            {todos.map((todo, i) => {
              return (
                <Todo key={todo.get('id')}
                    dispatch={this.props.dispatch}
                    index={i}
                    todo={todo}/>
              );
            })}
          </ListGroup>
        )}
        <Button bsStyle="primary" onClick={() => this.props.dispatch(getTodos())}>Refresh</Button>
      </div>
    );
  }
}

class Todo extends PureComponent {

  componentWillMount() {
    console.count('ToDo initial render');
  }

  componentWillUpdate(nextProps) {
    console.info('ToDo will update - ID: ' + nextProps.todo.get('id'));
  }

  render() {
    const isCompleted = this.props.todo.get('isCompleted');
    const classNames = cn('todo', {
      completed: isCompleted,
    });
    return (
      <ListGroupItem>
        <span className={classNames}
            onClick={() => this.props.dispatch(completeTodo(this.props.index, isCompleted))}>
          {this.props.todo.get('text')}
        </span>
        <div className="close" onClick={() => this.props.dispatch(this.props.index)}>&times;</div>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(mapStateToProps)(Todos);
