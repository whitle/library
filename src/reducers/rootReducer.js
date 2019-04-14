import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import booksReducer from './booksReducer';

export default combineReducers({
  users: usersReducer,
  books: booksReducer
});


// const ClientsListReducer = combineReducers({
//   clients: ClientsReducer,
//   editClient: EditClientReducer,
//   tabs: TabsReducer,
//   search: SearchReducer,
//   form: reduxFormReducer, // mounted under "form"
// });
//
// export default ClientsListReducer
