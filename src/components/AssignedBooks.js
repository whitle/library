import React, { Component } from 'react';
import BooksGrid from './books-grid/BooksGrid';
import BooksApi from 'api/BooksApi';

class AssignedBooks extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.fetchAssignedBooks = this.fetchAssignedBooks.bind(this);
    this.onBookProgressSet = this.onBookProgressSet.bind(this);
  }

  fetchAssignedBooks() {
    this.booksApi.assignedBooks({ accessToken: this.props.accessToken })
      .then(response => {
        this.props.assignedBooksRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.assignedBooksRequestSuccess(books);
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
        this.fetchAssignedBooks();
        alert(`Done!\nDate of reading: ${dateOfReading}\nPages read: ${pagesRead}`);
      }).catch(error => {
        console.log(error);
        this.props.logoutUserRequestSuccess();
      });
  }

  componentDidMount() {
    this.fetchAssignedBooks();
  }

  render() {
    if (this.props.books.isLoading) {
      return <p>Loading...</p>;
    }
    else if (this.props.books.assigned.length === 0) {
      return <h4 className='text-center'>Nothing was assigned...</h4>;
    }

    return (
      <BooksGrid {...this.props}
        title='Assigned books'
        section='assigned'
        items={this.props.books.assigned}
        callback={this.onBookProgressSet}
      />
    );
  }
}

export default AssignedBooks;
