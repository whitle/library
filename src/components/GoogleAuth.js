import React, { Component } from 'react';
import GoogleAuthApi from 'api/GoogleAuthApi';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import logo from './logo.svg';

class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.googleResponse = this.googleResponse.bind(this);
    this.logout = this.logout.bind(this);
    this.onFailure = this.onFailure.bind(this); 
    this.googleAuthApi = new GoogleAuthApi();
  }

  googleResponse(response) {
    this.googleAuthApi.getUser({ accessToken: response.accessToken })
      .then(response => response.json())
      .then(user => {
        const token = user.access_token
        if (token) {
          this.props.loginUser(user);
          console.log(user);
        }
      });
  }

  logout() {
    this.props.logoutUser();
  }

  onFailure(error) {
    console.log(error);
  }

  render() {
    const { isAuthenticated } = this.props.user;
    return (
      <div className="App">
        {
          !isAuthenticated && <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
            cookiePolicy={'single_host_origin'}
          />
        }
        {
          isAuthenticated && <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          >
          </GoogleLogout>
        }
      </div>
    );
  }
}

export default GoogleAuth;
