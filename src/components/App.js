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
      <div className="app">
        <div className="todos">
          <h1>ToDo App</h1>
          <AddTodo dispatch={this.props.dispatch}/>
          <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
          <Footer dispatch={this.props.dispatch} activeFilter={this.props.todos.get('activeFilter')}/>
        </div>
        <small className="signature">by <b>Ivan Rogić</b> from <b>Toptal</b></small>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(mapStateToProps)(App);
