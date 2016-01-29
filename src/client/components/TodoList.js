import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Footer from './Footer';

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
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
      <div className="todos-wrapper">
        <h2>ToDo</h2>
        <AddTodo dispatch={this.props.dispatch}/>
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
        <Footer
            activeFilter={this.props.todos.get('activeFilter')}
            dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(mapStateToProps)(TodoList);
