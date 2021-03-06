import ApiClient from './ApiClient';

class BooksApi extends ApiClient {
  constructor() {
    super({basePath:`${process.env.REACT_APP_PROXY}/api/v1/books`});
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

  assignedBooks({accessToken}) {
    const tokenBlob = super.composeTokenBlob({ access_token: accessToken });
    return super.post('assigned', tokenBlob);
  }

  ownBooks({accessToken}) {
    const tokenBlob = super.composeTokenBlob({ access_token: accessToken });
    return super.post('own', tokenBlob);
  }

  addBook({accessToken, bookTitle, bookAuthor, bookPages}) {
    const tokenBlob = super.composeTokenBlob({
      access_token: accessToken,
      title: bookTitle,
      author: bookAuthor,
      pages: bookPages
    });
    return super.post('add', tokenBlob);
  }

  setDateOfReadingBook({accessToken, bookId, dateOfReading, pagesRead}) {
    const tokenBlob = super.composeTokenBlob({
      access_token: accessToken,
      book_id: bookId,
      date_of_reading: dateOfReading,
      pages_read: pagesRead
    })
    return super.post('date_of_reading', tokenBlob);
  } 
}

export default BooksApi;
