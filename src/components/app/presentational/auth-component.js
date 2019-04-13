import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import config from 'config.json';
// import logo from './logo.svg';

export default class AuthComponent extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};
    this.googleResponse = this.googleResponse.bind(this);
    this.logout = this.logout.bind(this);
    this.onFailure = this.onFailure.bind(this); 
  }

  googleResponse(response) {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      {type : 'application/json'}
    );

    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };

    fetch('http://localhost:3001/api/v1/auth/google', options).then(response => {
      response.json().then(user => {
        const token = user.access_token
        if (token) {
          this.setState({isAuthenticated: true, user, token})
        }
      });
    });
  }

  logout() {
    this.setState({isAuthenticated: false, token: '', user: null})
  }

  onFailure(error) {
    console.log(error);
  }

  render() {
    const {isAuthenticated} = this.state;

    return (
      <div className="App">
        {
          !isAuthenticated && <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
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
        {/* <header className="App-header"> */}
        {/*   <img src={logo} className="App-logo" alt="logo" /> */}
        {/*   <p> */}
        {/*     Edit <code>src/App.js</code> and save to reload. */}
        {/*   </p> */}
        {/*   <a */}
        {/*     className="App-link" */}
        {/*     href="https://reactjs.org" */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*   > */}
        {/*     Learn React */}
        {/*   </a> */}
        {/* </header> */}
      </div>
    );
  }
}

  // constructor (props) {
  //   super(props);
  // }
  //
  // componentWillMount() {
  // }

//   render() {
//     return (
//       <Row>
//         <Col md={12}>
//         </Col>
//       </Row>
//     )
//   }
// }

// AuthenticationComponent.propTypes = {
//   estimators: PropTypes.array.isRequired,
//   estimates: PropTypes.object.isRequired,
// };

