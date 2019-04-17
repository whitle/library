import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './components/GoogleAuth';
import AppTabs from './components/AppTabs';
import { loginUser, logoutUser } from './actions/userActions';
import {
  notAssignedBooksRequest, notAssignedBooksRequestSuccess,
  assignBookRequest, assignBookRequestSuccess
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
  notAssignedBooksRequest: () => dispatch(notAssignedBooksRequest()),
  notAssignedBooksRequestSuccess: (books) => dispatch(notAssignedBooksRequestSuccess(books)),
  assignBookRequest: () => dispatch(assignBookRequest()),
  assignBookRequestSuccess: () => dispatch(assignBookRequestSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
