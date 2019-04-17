export const NOT_ASSIGNED_BOOKS_REQUEST = 'NOT_ASSIGNED_BOOKS_REQUEST'
export const NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS = 'NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS';

export const ASSIGN_BOOK_REQUEST = 'ASSIGN_BOOK_REQUEST'
export const ASSIGN_BOOK_REQUEST_SUCCESS = 'ASSIGN_BOOK_REQUEST_SUCCESS'

export const notAssignedBooksRequestSuccess = (data) => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS,
  payload: data
});

export const notAssignedBooksRequest = () => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST
});

export const assignBookRequest = () => ({
  type: ASSIGN_BOOK_REQUEST
});

export const assignBookRequestSuccess = () => ({
  type: ASSIGN_BOOK_REQUEST_SUCCESS
});
