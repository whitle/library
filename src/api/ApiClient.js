class ApiClient {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl;
  }

  post(url, data) {
    return fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      body: data,
      mode: 'cors',
      cache: 'default'
    });
  }

  composeTokenBlob(options) {
    return new Blob(
      [JSON.stringify(options, null, 2)],
      {type : 'application/json'}
    );
  }
}

export default ApiClient;
