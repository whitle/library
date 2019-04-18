import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BooksApi from 'api/BooksApi';

class BooksGrid extends Component {
  constructor(props) {
    super(props);
    this.booksApi = new BooksApi();
    this.composeStartDatesObject = this.composeStartDatesObject.bind(this);
    this.bookProgressAction = this.bookProgressAction.bind(this);
    this.buttonAction = this.buttonAction.bind(this);

    this.state = {
      startDate: this.composeStartDatesObject()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  composeStartDatesObject() {
    let result = {};
    this.props.items.forEach((item) => {
      result[item.id] = new Date();
    });
    return result;
  }

  handleDateChange(date, id) {
    console.log(this);
    let state = this.state.startDate;
    state[id] = date;
    this.setState({ startDate: state });
  }

  bookProgressAction(id) {
    return(
      <>
        <Row>
          Date:
          <DatePicker
            selected={this.state.startDate[id]}
            onChange={this.handleDateChange}
          />
        </Row>
        <Row>
          Read the pages:
          <input/>
        </Row>
      </>
    );
  }

  buttonAction(id) {
    return(
      <Button variant='link' onClick={() => this.props.callback(id)}>
       {this.props.actionName}
      </Button>
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
                {
                  <div>
                    {
                      this.props.date && <Col md={2}>
                        { this.bookProgressAction(item.id) }
                      </Col>
                    }
                    <Col md={1}>{this.buttonAction(item.id)}</Col>
                  </div>
                }
              </Row>
            )
          })
        }
      </Container>
    );
  }
}

export default BooksGrid;
