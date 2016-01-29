import React from 'react';
import { connect } from 'react-redux';
import * as TodosActions from 'actions/todos';
import { bindActionCreators } from 'redux';
import PureComponent from './PureComponent';

class Todos extends PureComponent {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.get('todos');
    return (
      <div>
        <div>{todos.size && todos.map(todo => <Todo key={todo.get('id')} todo={todo}/>)}</div>
        <button onClick={() => this.props.getTodos()}>Refresh</button>
      </div>
    );
  }
}

class Todo extends PureComponent {

  componentWillMount() {
    console.count('ToDo initial render');
  }

  componentWillUpdate() {
    console.count('ToDo will update');
  }

  render() {
    return (
      <div>
        <div>{this.props.todo.get('text')}</div>
        <div>{this.props.todo.get('isCompleted')}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});
const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
