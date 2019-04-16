import React, { Component } from 'react';
import BooksGrid from './BooksGrid';
import BooksApi from 'api/BooksApi';

class Books extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
  }

  componentDidMount() {
    console.log('BOOK COMPONENT');
    console.log(this.props);

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
        this.props.logoutUser();
      });
  }

  render() {
    if (this.props.books.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <BooksGrid {...this.props}
        books={this.props.books.notAssigned}
        accessToken={this.props.accessToken}
      />
    );
  }
}

export default Books;
