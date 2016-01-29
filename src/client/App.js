import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import { ReduxRouter } from 'redux-router';

export default class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired,
    debug: React.PropTypes.bool,
    debugExternal: React.PropTypes.bool,
  };

  renderDevTools() {
    if (!this.props.debug) {
      return null;
    }

    return (
      <DebugPanel top right bottom key="debugPanel" style={{zoom: '0.8', maxWidth: '50%'}}>
        <DevTools store={this.props.store} monitor={LogMonitor} visibleOnLoad={false}/>
      </DebugPanel>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderDevTools()}
        <Provider store={this.props.store}>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </Provider>
      </div>
    );
  }
}
