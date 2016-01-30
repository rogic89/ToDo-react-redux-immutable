import React, { Component, PropTypes } from 'react';
import { addTodo } from 'actions/todos';

export default class AddTodo extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  shouldComponentUpdate() {
    // component has no props or state change so it is safe to just return `false`
    return false;
  }

  addTodo(e) {
    e.preventDefault();
    const input = this.refs.todo;
    const value = input.value.trim();
    if (value) {
      this.props.dispatch(addTodo(value));
      input.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.addTodo(e)}>
          <input className="form-control" type="text" placeholder="Enter ToDo" ref="todo"/>
        </form>
        <br/>
      </div>
    );
  }
}
