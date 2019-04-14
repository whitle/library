import { ASSIGN_BOOK } from 'actions/bookActions';

export default (state = {}, action) => {
  switch (action.type) {
    case ASSIGN_BOOK:
      return {
        result: action.payload
      }
    default:
      return state
  }
}
