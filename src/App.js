import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './components/googleAuth';
import { loginUser, logoutUser } from './actions/userActions';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   estimatesPanelTitle: ''
    // };
  }

  render() {
    return (
      <>
        <GoogleAuth
          isAuthenticated={this.props.users.isAuthenticated}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
