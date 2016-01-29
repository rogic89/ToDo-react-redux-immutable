import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as CounterActions from 'actions/counter';
import { bindActionCreators } from 'redux';

import { Button, ButtonGroup } from 'react-bootstrap';

class Counter extends Component {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <h3>Clicked: <span className={counter >= 0 ? 'text-primary' : 'text-danger'}>{counter}</span> times</h3>
        <ButtonGroup>
          <Button bsStyle="success" onClick={increment}>+</Button>
          <Button bsStyle="danger" onClick={decrement}>-</Button>
        </ButtonGroup>
        {' '}
        <ButtonGroup>
          <Button bsStyle="info" onClick={incrementIfOdd}>Increment if odd</Button>
          <Button bsStyle="primary" onClick={() => incrementAsync()}>Increment async</Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
