import React, { PropTypes, Component } from 'react';
import 'styles/app.scss';
import 'bootstrap/dist/css/bootstrap.css';

class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;
