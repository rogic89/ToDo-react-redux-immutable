import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

class App extends PureComponent {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch, activeFilter, todoList } = this.props;
    return (
      <div className="app">
        <div className="todos">
          <h1>ToDo App</h1>
          <AddTodo dispatch={dispatch} />
          <TodoList dispatch={dispatch} activeFilter={activeFilter} todoList={todoList} />
          <Footer dispatch={dispatch} activeFilter={activeFilter} />
        </div>
        <small className="signature">by <b>Ivan Rogić</b> from <b>Toptal</b></small>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.todos });

export default connect(mapStateToProps)(App);
