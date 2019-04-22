import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BooksGridAction from './BooksGridAction';
import BooksApi from 'api/BooksApi';

class BooksGrid extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
  }

  render() {
    return(
      <Container>
        <Row className='books-grid--header'>
          <Col md={12}><h2 className='text-center'>{this.props.title}</h2></Col>
        </Row>
        <Row className='books-grid--field-name'>
          <Col md={1}><strong>Id</strong></Col>
          <Col md={3}><strong>Title</strong></Col>
          <Col md={3}><strong>Author</strong></Col>
          <Col md={2}><strong>Pages</strong></Col>
          <Col md={3}><strong>Action</strong></Col>
        </Row>
        {
          this.props.items.map((item, key) => {
            return(
              <Row key={key} className='books-grid--row'>
                <Col md={1}>{item.id}</Col>
                <Col md={3}>{item.title}</Col>
                <Col md={3}>{item.author}</Col>
                <Col md={2}>{item.pages}</Col>
                <Col md={3}>
                  <BooksGridAction
                    section={this.props.section}
                    bookId={item.id}
                    callback={this.props.callback}
                  />
                </Col>
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default BooksGrid;
