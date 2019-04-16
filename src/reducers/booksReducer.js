import {
  NOT_ASSIGNED_BOOKS_REQUEST,
  NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS
} from 'actions/booksActions';

const INITIAL_STATE = { notAssigned: [], error: null, isLoading: false };

const BooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOT_ASSIGNED_BOOKS_REQUEST:
      return { ...state, isLoading: true };
    case NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS:
      return { ...state, notAssigned: action.payload, isLoading: false }
    default:
      return state
  }
}

export default BooksReducer;
