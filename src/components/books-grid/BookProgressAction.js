import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';

class BookProgressAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerDate: new Date(),
      dateOfReading: this.composeDate(new Date()),
      pagesRead: 0
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onPagesReadChange = this.onPagesReadChange.bind(this);
    this.composeDate = this.composeDate.bind(this);
  }

  onDateChange(date) {
    this.setState({
      datePickerDate: date,
      dateOfReading: this.composeDate(new Date(date))
    });
  }

  onPagesReadChange(event) {
    this.setState({ pagesRead: event.target.value});
  }

  composeDate(currentDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    return `${date}/${month}/${year}`;
  }
 
  render() {
    return(
      <div className='book-progress-action'>
        <div className='book-progress-action--row'>
          <label>Date:</label>
          <DatePicker
            selected={this.state.datePickerDate}
            onChange={this.onDateChange}
          />
        </div>
        <div className='book-progress-action--row'>
          <label>Read the pages:</label>
          <div className='book-progress-action--read-pages'>
            <input type='number'
                   onChange={this.onPagesReadChange} />
          </div>
        </div>
        <div className='book-progress-action--row center'>
          <Button variant='link'
                  onClick={() => this.props.callback(
                    this.props.bookId,
                    this.state.dateOfReading,
                    this.state.pagesRead
                  )}>
            Set progress
          </Button>
        </div>
      </div>
    );
  }
}

export default BookProgressAction;
