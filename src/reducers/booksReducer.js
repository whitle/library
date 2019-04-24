import {
  NOT_ASSIGNED_BOOKS_REQUEST, NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS,
  ASSIGN_BOOK_REQUEST, ASSIGN_BOOK_REQUEST_SUCCESS,
  ASSIGNED_BOOKS_REQUEST, ASSIGNED_BOOKS_REQUEST_SUCCESS,
  SET_DATE_OF_READING_BOOK_REQUEST, SET_DATE_OF_READING_BOOK_REQUEST_SUCCESS,
  OWN_BOOKS_REQUEST, OWN_BOOKS_REQUEST_SUCCESS,
  ADD_BOOK_REQUEST, ADD_BOOK_REQUEST_SUCCESS
} from 'actions/booksActions';

const INITIAL_STATE = {
  notAssigned: [],
  assigned: [],
  own: [],
  error: null,
  isLoading: false
};

const BooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOT_ASSIGNED_BOOKS_REQUEST:
      return { ...state, isLoading: true };
    case NOT_ASSIGNED_BOOKS_REQUEST_SUCCESS:
      return { ...state, notAssigned: action.payload, isLoading: false }

    case ASSIGN_BOOK_REQUEST:
      return { ...state, isLoading: true }
    case ASSIGN_BOOK_REQUEST_SUCCESS:
      return { ...state, isLoading: false }

    case ASSIGNED_BOOKS_REQUEST:
      return { ...state, isLoading: true };
    case ASSIGNED_BOOKS_REQUEST_SUCCESS:
      return { ...state, assigned: action.payload, isLoading: false }

    case SET_DATE_OF_READING_BOOK_REQUEST:
      return { ...state, isLoading: true }
    case SET_DATE_OF_READING_BOOK_REQUEST_SUCCESS:
      return { ...state, isLoading: false }

    case OWN_BOOKS_REQUEST:
      return { ...state, isLoading: true };
    case OWN_BOOKS_REQUEST_SUCCESS:
      return { ...state, own: action.payload, isLoading: false }

    case ADD_BOOK_REQUEST:
      return { ...state, isLoading: true }
    case ADD_BOOK_REQUEST_SUCCESS:
      return { ...state, isLoading: false }

    default:
      return state;
  }
}

export default BooksReducer;
