export const ASSIGN_BOOK = 'ASSIGN_BOOK';

export const assignBook = (data) => dispatch => {
  dispatch({
    type: ASSIGN_BOOK,
    payload: data
  })
};
