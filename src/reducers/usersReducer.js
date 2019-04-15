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


import { USERS_REQUEST, USERS_REQUEST_SUCCESS, USERS_REQUEST_FAILURE } from "actions/user-actions";

const INITIAL_STATE = { list: [], error: null, loading: false };

const UsersReducer = (state = INITIAL_STATE, action) => {
  let error;
  switch(action.type) {
    case USERS_REQUEST:
      return {...state, error: null, loading: true};
    case USERS_REQUEST_SUCCESS:
      return {...state, list: action.payload, loading: false};
    case USERS_REQUEST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, error: error, loading: false};

    default:
      return state;
  }
};

export default UsersReducer
