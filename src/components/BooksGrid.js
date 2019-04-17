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
        this.props.assignBookRequest();
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      }).then(books => {
        this.props.assignBookRequestSuccess();
        this.props.callback();
      }).catch(error => {
        console.log(error);
        this.props.logoutUser();
      });
  }

  render() {
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
          this.props.items.map((item, key) => {

            return(
              <Row key={key}>
                <Col md={1}>{item.id}</Col>
                <Col md={3}>{item.title}</Col>
                <Col md={3}>{item.author}</Col>
                <Col md={2}>{item.pages}</Col>
                <Col md={3}><Button variant='link' onClick={() => this.onBookAssign(item.id)}>Assign</Button></Col>
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default BooksGrid;
