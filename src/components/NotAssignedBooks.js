import React, { Component } from 'react';

import BooksGrid from './books-grid/BooksGrid';
import './books-grid/BooksGrid.scss';

import BooksApi from 'api/BooksApi';

class NotAssignedBooks extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.fetchNotAssignedBooks = this.fetchNotAssignedBooks.bind(this);
    this.onBookAssign = this.onBookAssign.bind(this);
  }

  fetchNotAssignedBooks() {
    this.booksApi.notAssignedBooks({ accessToken: this.props.accessToken })
      .then(response => {
        this.props.notAssignedBooksRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.notAssignedBooksRequestSuccess(books);
      }).catch(error => {
        console.log(error);
        this.props.logoutUserRequestSuccess();
      });
  }

  onBookAssign(bookId) {
    this.booksApi.assignBook({ accessToken: this.props.accessToken, bookId: bookId })
      .then(response => {
        this.props.assignBookRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.assignBookRequestSuccess();
        this.fetchNotAssignedBooks();
      }).catch(error => {
        console.log(error);
        this.props.logoutUserRequestSuccess();
      });
  }

  componentDidMount() {
    this.fetchNotAssignedBooks();
  }

  render() {
    if (this.props.books.isLoading) {
      return <p>Loading...</p>;
    }
    else if (this.props.books.notAssigned.length === 0) {
      return <h4 className='text-center'>Nothing to assign...</h4>;
    }

    return (
      <BooksGrid {...this.props}
        title='Available books'
        section='not_assigned'
        items={this.props.books.notAssigned}
        callback={this.onBookAssign}
      />
    );
  }
}

export default NotAssignedBooks;
