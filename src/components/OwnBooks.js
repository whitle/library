import React, { Component } from 'react';

import BooksGrid from './books-grid/BooksGrid';
import './books-grid/BooksGrid.scss';

import AddBookModal from './AddBookModal';
import BooksApi from 'api/BooksApi';

class OwnBooks extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.fetchOwnBooks = this.fetchOwnBooks.bind(this);
    this.onBookAdd = this.onBookAdd.bind(this);
    this.onBookProgressSet = this.onBookProgressSet.bind(this);
  }

  fetchOwnBooks() {
    this.booksApi.ownBooks({ accessToken: this.props.accessToken })
      .then(response => {
        this.props.ownBooksRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.ownBooksRequestSuccess(books);
      }).catch(error => {
        console.log(error);
        this.props.logoutUserRequestSuccess();
      });
  }

  onBookAdd(title, author, pages) {
    this.booksApi.addBook({
      accessToken: this.props.accessToken,
      bookTitle: title,
      bookAuthor: author,
      bookPages: pages
    }).then(response => {
      this.props.addBookRequest();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(books => {
      this.props.addBookRequestSuccess();
      this.fetchOwnBooks();
    }).catch(error => {
      console.log(error);
      this.props.logoutUserRequestSuccess();
    });
  }

  onBookProgressSet(bookId, dateOfReading, pagesRead) {
    this.booksApi.setDateOfReadingBook({
      accessToken: this.props.accessToken,
      bookId: bookId,
      dateOfReading: dateOfReading,
      pagesRead: pagesRead
    }).then(response => {
      this.props.setDateOfReadingBookRequest();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    }).then(books => {
      this.props.setDateOfReadingBookRequestSuccess();
      this.fetchOwnBooks();
      alert(`Done!\nDate of reading: ${dateOfReading}\nPages read: ${pagesRead}`);
    }).catch(error => {
      console.log(error);
      this.props.logoutUserRequestSuccess();
    });
  }

  componentDidMount() {
    this.fetchOwnBooks();
  }

  render() {
    if (this.props.books.isLoading) {
      return <p>Loading...</p>;
    }
    else if (this.props.books.own.length === 0) {
      return (
        <AddBookModal
          callback={this.onBookAdd}
        />
      );
    }

    return (
      <>
        <AddBookModal
          callback={this.onBookAdd}
        />
        <BooksGrid {...this.props}
          title='My books'
          section='own'
          items={this.props.books.own}
          callback={this.onBookProgressSet}
        />
      </>
    );
  }
}

export default OwnBooks;
