class ApiClient {
  constructor({basePath}) {
    this.basePath = basePath;
  }

  post(path, data) {
    return fetch(`${this.basePath}/${path}`, {
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
