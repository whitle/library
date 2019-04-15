import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './components/GoogleAuth';
import AppTabs from './components/AppTabs';
import { loginUser, logoutUser } from './actions/userActions';

class App extends Component {
  render() {
    return (
      <div>
        <GoogleAuth
					isAuthenticated={this.props.users.isAuthenticated}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
        />
        {
          this.props.users.isAuthenticated &&
						<AppTabs
							books={this.props.users.books}
							assigned={this.props.users.assigned}
							own={this.props.user.own}
							profile={this.props.user.profile}
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
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
