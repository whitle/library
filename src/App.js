import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './components/GoogleAuth';
import AppTabs from './components/AppTabs';
import {
  loginUserRequestSuccess,
  logoutUserRequestSuccess }
from './actions/userActions';
import {
  notAssignedBooksRequest, notAssignedBooksRequestSuccess,
  assignBookRequest, assignBookRequestSuccess,
  assignedBooksRequest, assignedBooksRequestSuccess,
  setDateOfReadingBookRequest, setDateOfReadingBookRequestSuccess
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
  loginUserRequestSuccess: (user) => dispatch(loginUserRequestSuccess(user)),
  logoutUserRequestSuccess: () => dispatch(logoutUserRequestSuccess()),
  notAssignedBooksRequest: () => dispatch(notAssignedBooksRequest()),
  notAssignedBooksRequestSuccess: (books) => dispatch(notAssignedBooksRequestSuccess(books)),
  assignBookRequest: () => dispatch(assignBookRequest()),
  assignBookRequestSuccess: () => dispatch(assignBookRequestSuccess()),
  assignedBooksRequest: () => dispatch(assignedBooksRequest()),
  assignedBooksRequestSuccess: (book) => dispatch(assignedBooksRequestSuccess(book)),
  setDateOfReadingBookRequest: () => dispatch(setDateOfReadingBookRequest()),
  setDateOfReadingBookRequestSuccess: () => dispatch(setDateOfReadingBookRequestSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
