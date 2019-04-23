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
  setDateOfReadingBookRequest, setDateOfReadingBookRequestSuccess,
  ownBooksRequest, ownBooksRequestSuccess,
  addBookRequest, addBookRequestSuccess
} from './actions/booksActions';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Library</h1>
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
  setDateOfReadingBookRequestSuccess: () => dispatch(setDateOfReadingBookRequestSuccess()),
  ownBooksRequest: () => dispatch(ownBooksRequest()),
  ownBooksRequestSuccess: (book) => dispatch(ownBooksRequestSuccess(book)),
  addBookRequest: () => dispatch(addBookRequest()),
  addBookRequestSuccess: () => dispatch(addBookRequestSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
