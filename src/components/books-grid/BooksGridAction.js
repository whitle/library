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
        return (<BookProgressAction
                 bookId={this.props.bookId}
                 callback={this.props.callback}
               />);
      // case 'assigned':
      //   return <BookProgressAction />
      // case 'own':
      //   return <BookProgressAction />
      default: return null;
    }
  }
}

//  {
//    <div>
//      {
//        this.props.date && <Col md={2}>
//          { this.bookProgressAction(item.id) }
//        </Col>
//      }
//      <Col md={1}>{this.buttonAction(item.id)}</Col>
//    </div>
//  }


export default BooksGridAction;
