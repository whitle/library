import React, { Component } from 'react';
import BooksGrid from './BooksGrid';
import BooksApi from 'api/BooksApi';

class Books extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.fetchNotAssignedBooks = this.fetchNotAssignedBooks.bind(this);
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
        this.props.logoutUser();
      });
  }

  componentDidMount() {
    this.fetchNotAssignedBooks();
  }

  update() {
    this.setState({ updateTrigger: Date.now() });
    this.forceUpdate();
  }

  render() {
    if (this.props.books.isLoading) {
      return <p>Loading...</p>;
    }
    else if (this.props.books.notAssigned.length === 0) {
      return <h4 className='text-center'>Nothing to assign...</h4>;
    }

    return (
      <div>
        <BooksGrid {...this.props}
          items={this.props.books.notAssigned}
          accessToken={this.props.accessToken}
          callback={this.fetchNotAssignedBooks}
        />
      </div>
    );
  }
}

export default Books;
