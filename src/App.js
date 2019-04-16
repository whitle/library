import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './components/GoogleAuth';
import AppTabs from './components/AppTabs';
import { loginUser, logoutUser } from './actions/userActions';
import {
  notAssignedBooksRequestSuccess, notAssignedBooksRequest
} from './actions/booksActions';

class App extends Component {
  render() {
    return (
      <div>
        <GoogleAuth {...this.props}
          isAuthenticated={this.props.user.isAuthenticated}
        />
        {
          this.props.user.isAuthenticated &&
            <AppTabs {...this.props}
           />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  notAssignedBooksRequestSuccess: (books) => dispatch(notAssignedBooksRequestSuccess(books)),
  notAssignedBooksRequest: () => dispatch(notAssignedBooksRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
