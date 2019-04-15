import { ASSIGN_BOOK } from 'actions/bookActions';

const INITIAL_STATE = { list: [], error: null, isLoading: false };

const BooksReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSIGN_BOOK:
      return { ...state, result: action.payload }
    default:
      return state
  }
}

export default BooksReducer;

const INITIAL_STATE = { books: [], assigned: [], isAuthenticated: false, error: null, isLoading: false };

// export const ClientsReducer = (state = INITIAL_STATE, action) => {

const UsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isAuthenticated: true }
    case LOGOUT_USER:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
};

export default UsersReducer;
