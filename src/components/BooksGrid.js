import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BooksApi from 'api/BooksApi';

class BooksGrid extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
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
                <Col md={3}><Button variant='link' onClick={() => this.props.callback(item.id)}>Assign</Button></Col>
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default BooksGrid;
