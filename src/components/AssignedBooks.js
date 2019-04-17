import React, { Component } from 'react';
import BooksGrid from './BooksGrid';
import BooksApi from 'api/BooksApi';

class AssignedBooks extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.fetchAssignedBooks = this.fetchAssignedBooks.bind(this);
    this.onDateOfReadingSet = this.onDateOfReadingSet.bind(this);
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
        this.props.logoutUser();
      });
  }

  onDateOfReadingSet(bookId) {
    this.booksApi.setDateOfReadingBook({ accessToken: this.props.accessToken, bookId: bookId })
      .then(response => {
        this.props.setDateOfReadingBookRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.setDateOfReadingBookRequestSuccess();
        this.fetchAssignedBooks();
      }).catch(error => {
        console.log(error);
        this.props.logoutUser();
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
        actionName='Set date'
        date
        items={this.props.books.assigned}
        callback={this.onDateOfReadingSet}
      />
    );
  }
}

export default AssignedBooks;
