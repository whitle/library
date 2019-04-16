import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BooksApi from 'api/BooksApi';

class BooksGrid extends Component {
  constructor(props) {
    super(props);
    this.onBookAssign = this.onBookAssign.bind(this);
    this.booksApi = new BooksApi();
  }

  onBookAssign(bookId) {
    this.booksApi.assignBook({ accessToken: this.props.accessToken, bookId: bookId })
      .then(response => {
        // this.props.notAssignedBooksRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log('GRID');
        console.log(response);
        return response.json()
      }).then(books => {
        // this.props.notAssignedBooksRequestSuccess(books);
      }).catch(error => {
        console.log(error);
        this.props.logoutUser();
      });
  }

  render() {
    console.log(this.props);
    return(
      <Container>
        <Row>
          <Col md={12}><h2 className='text-center'>Public books</h2></Col>
        </Row>
        <Row>
          <Col md={1}><strong>Id</strong></Col>
          <Col md={3}><strong>Title</strong></Col>
          <Col md={3}><strong>Author</strong></Col>
          <Col md={2}><strong>Pages</strong></Col>
          <Col md={3} />
        </Row>
        {
          this.props.books.map((book, key) => {

            return(
              <Row key={key}>
                <Col md={1}>{book.id}</Col>
                <Col md={3}>{book.title}</Col>
                <Col md={3}>{book.author}</Col>
                <Col md={2}>{book.pages}</Col>
                <Col md={3}><Button variant='link' onClick={() => this.onBookAssign(book.id)}>Assign</Button></Col>
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default BooksGrid;
