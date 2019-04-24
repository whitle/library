import {
  LOGIN_USER_REQUEST_SUCCESS,
  LOGOUT_USER_REQUEST_SUCCESS
} from 'actions/userActions';

const INITIAL_STATE = {
  own_books: [],
  assigned_books: [],
  account_details: {},
  isAuthenticated: false,
  error: null,
  isLoading: false
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST_SUCCESS:
      return { ...state, isAuthenticated: true, account_details: action.payload }
    case LOGOUT_USER_REQUEST_SUCCESS:
      return { ...state, isAuthenticated: false }
    default:
      return state;
  }
};

export default UserReducer;
