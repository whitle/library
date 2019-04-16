export const NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS = 'NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS';
export const NOT_ASSIGNED_BOOKS_REQUEST = 'NOT_ASSIGNED_BOOKS_REQUEST'

export const notAssignedBooksRequestSuccess = (data) => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS,
  payload: data
});

export const notAssignedBooksRequest = () => ({
  type: NOT_ASSIGNED_BOOKS_REQUEST
});
