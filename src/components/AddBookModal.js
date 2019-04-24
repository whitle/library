import React, { Component } from 'react';
import { Modal, Form, Container, Row, Button } from 'react-bootstrap';

class AddBookModal extends Component {
  constructor(props) {
    super(props);

    this.onShow = this.onShow.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onFormTitleChange = this.onFormTitleChange.bind(this);
    this.onFormAuthorChange = this.onFormAuthorChange.bind(this);
    this.onFormPagesChange = this.onFormPagesChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      show: false,
      formTitle: '',
      formAuthor: '',
      formPages: null
    };
  }

  onClose() {
    this.setState({ show: false });
  }

  onShow() {
    this.setState({ show: true });
  }

  onFormTitleChange(event) {
    console.log(event.target.value);
    this.setState({ formTitle: event.target.value });
  }

  onFormAuthorChange(event) {
    console.log(event.target.value);
    this.setState({ formAuthor: event.target.value });
  }

  onFormPagesChange(event) {
    console.log(event.target.value);
    this.setState({ formPages: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('formTitle').value;
    const author = document.getElementById('formAuthor').value;
    const pages = document.getElementById('formPages').value;
    this.props.callback(title, author, pages);
  }

  render() {
    return (
      <Container>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='primary'
            onClick={this.onShow}>
            Add a new book
          </Button>
        </Row>
  
        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={this.state.show}        
          onHide={this.onClose}
          animation={false}
        >
  
          <Modal.Header closeButton>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={ (event) => this.onFormSubmit(event) }>
              <Form.Group controlId='formTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text'
                              placeholder='Title'
                              onChange={this.onFormTitleChange}
                              required/>
              </Form.Group>
            
              <Form.Group controlId='formAuthor'>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text'
                              placeholder='Author'
                              onChange={this.onFormAuthorChange}
                              required />
              </Form.Group>

              <Form.Group controlId='formPages'>
                <Form.Label>Pages</Form.Label>
                <Form.Control type='number'
                              placeholder='Pages'
                              onChange={this.onFormPagesChange}
                              required />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default AddBookModal;
