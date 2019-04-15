import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

class Books extends Component {
  constructor(props) {
    super(props);
    // this.googleResponse = this.googleResponse.bind(this);
    // this.logout = this.logout.bind(this);
    // this.onFailure = this.onFailure.bind(this); 
  }

	componentDidMount() {		
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: this.props.accessToken }, null, 2)],
      {type : 'application/json'}
    );

    // const options = {
    //   method: 'POST',
    //   body: tokenBlob,
    //   mode: 'cors',
    //   cache: 'default'
    // };
    const options = {
      method: 'GET',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };

    fetch('http://localhost:3001/api/v1/books', options).then(response => {
      response.json().then(books => {
        // this.setState({isAuthenticated: true, user, token})
        this.props.loginUser();
      });
    });
	}

  render() {
    // const { isAuthenticated } = this.props;
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
      </div>
    );
  }
}

export default Books;
