import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as AppActions from './appAction';

const App = ({isLDReady, location, children}) => {
  return (
    <div>
      <h1>Redux React Router Demo</h1>
      <div>Is launch darkly ready? {isLDReady ? 'yes' : 'no'}</div>
        <span>
          {
            /* Activate or deactivate link depending on current route */
            location.pathname === '/' || location.pathname === '/home' ?
              <span>Home</span> : <Link to="/">Home</Link>
          }
        </span> | {' '}
        <span>
          {
            location.pathname === '/contact' ?
              <span>Contact Us</span> : <Link to="/contact">Contact Us</Link>
          }
        </span>
      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const appState = state.App;

  return {
    isLDReady: appState.isLDReady
  };
};

export default connect(mapStateToProps, AppActions)(App);