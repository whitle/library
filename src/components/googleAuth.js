import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import config from 'config.json';
// import logo from './logo.svg';

class GoogleAuth extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isAuthenticated: false,
    //   user: null,
    //   token: ''
    // };
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
          // this.setState({isAuthenticated: true, user, token})
          this.props.loginUser();
        }
      });
    });
  }

  logout() {
    // this.setState({isAuthenticated: false, token: '', user: null})
    this.props.logoutUser();
  }

  onFailure(error) {
    console.log(error);
  }

  render() {
    const { isAuthenticated } = this.props;
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

// GoogleAuth.defaultProps = {
//   loginUser: () => {},
//   logoutUser: () => {},
//   isAuthenticated: false,
//   user: null,
//   token: ''
// };

export default GoogleAuth;



// Calendar.defaultProps = {
//   onSelectSlot: () => {},
//   onSelectEvent: () => {},
//   onNavigate: () => {},
//   notAvailableList: []
// };
//
// Calendar.propTypes = {
//   estimates: PropTypes.array.isRequired,
//   notAvailableList: PropTypes.array,
//   onSelectSlot: PropTypes.func,
//   onSelectEvent: PropTypes.func,
//   onNavigate: PropTypes.func
// };
//
// export default Calendar;
//
