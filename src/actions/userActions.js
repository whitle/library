export const LOGIN_USER_REQUEST_SUCCESS = 'LOGIN_USER';
export const LOGOUT_USER_REQUEST_SUCCESS = 'LOGOUT_USER';

export const loginUserRequestSuccess = (user) => ({
  type: LOGIN_USER_REQUEST_SUCCESS,
  payload: user
});

export const logoutUserRequestSuccess = () => ({
  type: LOGOUT_USER_REQUEST_SUCCESS
});
