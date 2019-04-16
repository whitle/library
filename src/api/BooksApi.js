import ApiClient from './ApiClient'

class BooksApi extends ApiClient {
  constructor() {
    super({baseUrl:'api/v1/books'});
  }

  notAssignedBooks({accessToken}) {
    const tokenBlob = super.composeTokenBlob({ access_token: accessToken });
    return super.post('not_assigned', tokenBlob);
  }

  assignBook({accessToken, bookId}) {
    const tokenBlob = super.composeTokenBlob({
      access_token: accessToken,
      book_id: bookId
    })
    return super.post('assign', tokenBlob);
  }
}

export default BooksApi;
