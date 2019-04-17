import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BooksApi from 'api/BooksApi';

class BooksGrid extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
  }

  bookProgressAction() {
    return(
      <>
        <Row>
          Date:
          <DatePicker
            selected={new Date()}
          />
        </Row>
        <Row>
          Pages:
          <input/>
        </Row>
      </>
    );
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md={12}><h2 className='text-center'>{this.props.title}</h2></Col>
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
                <Col md={3}>
                  { this.props.date && this.bookProgressAction() }
                  <Button variant='link' onClick={() => this.props.callback(item.id)}>
                    {this.props.actionName}
                  </Button>
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
