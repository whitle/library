export const NOT_ASSIGNED_BOOKS_REQUEST = 'NOT_ASSIGNED_BOOKS_REQUEST'
export const NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS = 'NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS';

export const ASSIGN_BOOK_REQUEST = 'ASSIGN_BOOK_REQUEST'
export const ASSIGN_BOOK_REQUEST_SUCCESS = 'ASSIGN_BOOK_REQUEST_SUCCESS'

export const ASSIGNED_BOOKS_REQUEST = 'ASSIGNED_BOOKS_REQUEST'
export const ASSIGNED_BOOKS_REQUEST_SUCCESS = 'ASSIGNED_BOOKS_REQUEST_SUCCESS';

export const SET_DATE_OF_READING_BOOK_REQUEST = 'SET_DATE_OF_READING_BOOK_REQUEST'
export const SET_DATE_OF_READING_BOOK_REQUEST_SUCCESS = 'SET_DATE_OF_READING_BOOK_REQUEST_SUCCESS'

export const notAssignedBooksRequest = () => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST
});

export const notAssignedBooksRequestSuccess = (data) => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS,
  payload: data
});

export const assignBookRequest = () => ({
  type: ASSIGN_BOOK_REQUEST
});

export const assignBookRequestSuccess = () => ({
  type: ASSIGN_BOOK_REQUEST_SUCCESS
});

export const assignedBooksRequest = () => ({
    type: ASSIGNED_BOOKS_REQUEST
});

export const assignedBooksRequestSuccess = (data) => ({
    type: ASSIGNED_BOOKS_REQUEST_SUCCESS,
    payload: data
});

export const setDateOfReadingBookRequest = () => ({
  type: SET_DATE_OF_READING_BOOK_REQUEST
});

export const setDateOfReadingBookRequestSuccess = () => ({
  type: SET_DATE_OF_READING_BOOK_REQUEST_SUCCESS
});
