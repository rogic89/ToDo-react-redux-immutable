import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

class App extends Component {

  static propTypes = {
    todos: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="todos-wrapper">
        <h2>ToDo App</h2>
        <AddTodo dispatch={this.props.dispatch}/>
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
        <Footer dispatch={this.props.dispatch} activeFilter={this.props.todos.get('activeFilter')}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(mapStateToProps)(App);
