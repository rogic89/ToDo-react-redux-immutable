import React, { Component, PropTypes } from 'react';
import { getTodos, deleteAllTodos, changeFilter } from 'actions/todos';
import cn from 'classnames';

export default class Footer extends Component {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return this.props.activeFilter !== nextProps.activeFilter;
  }

  filters = ['all', 'completed', 'active']

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <div className="btn-group">
          {this.filters.map(filter => {
            const className = cn('btn btn-default filter', {
              active: this.props.activeFilter === filter,
            });
            return (
              <button key={filter} className={className} onClick={() => dispatch(changeFilter(filter))}>
                {filter}
              </button>
            );
          })}
        </div>
        <div className="pull-right">
          <button className="btn btn-primary" onClick={() => dispatch(getTodos())}>Reset</button>
          <button className="btn btn-danger" onClick={() => dispatch(deleteAllTodos())}>Delete all</button>
        </div>
      </div>
    );
  }
}
