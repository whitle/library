import { LOGIN_USER, LOGOUT_USER } from 'actions/userActions';

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
