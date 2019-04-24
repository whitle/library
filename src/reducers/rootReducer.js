import { combineReducers } from 'redux';
import userReducer from './userReducer';
import booksReducer from './booksReducer';

export default combineReducers({
  user: userReducer,
  books: booksReducer
});
