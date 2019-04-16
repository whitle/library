import ApiClient from './ApiClient'

class GoogleAuthApi extends ApiClient {
  constructor() {
    super({baseUrl:'api/v1/auth'});
  }

  getUser({accessToken}) {
    const tokenBlob = super.composeTokenBlob({ access_token: accessToken });
    return super.post('google', tokenBlob);
  }
}

export default GoogleAuthApi;
