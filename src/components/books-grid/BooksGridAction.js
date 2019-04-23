import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import BookProgressAction from './BookProgressAction';
import './BookProgressAction.scss';

class BooksGridAction extends Component {
  

  render() {
    switch(this.props.section) {
      case 'not_assigned':
        return (
          <Button variant='link' onClick={() => this.props.callback(this.props.bookId)}>
            Assign
          </Button>
        );
      case 'assigned':
      case 'own':
        return (<BookProgressAction
                 bookId={this.props.bookId}
                 callback={this.props.callback}
               />);
      default: return null;
    }
  }
}

export default BooksGridAction;
