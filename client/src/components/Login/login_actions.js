import { SUCCES_LOGIN, SUCCES_LOGOUT } from '../../_redux/actionTypes';
import { requestLogin, requestLogout, requestRegister } from '../../api/api';

export const registerUser = user => dispatch => {
  requestRegister(user)
    .then(res => {
      if (res && res.status === 201 && res.data) {
        dispatch({
          type: SUCCES_LOGIN,
          payload: res.data,
        });
      }
    })
    .catch(err => err);
};

export const loginUser = user => dispatch => {
  requestLogin(user)
    .then(res => {
      if (res && res.status === 201 && res.data) {
        dispatch({
          type: SUCCES_LOGIN,
          payload: res.data,
        });
      }
    })
    .catch(err => err);
};

export const logoutUser = () => (dispatch, getState) => {
  const { token } = getState();

  return (
    requestLogout(token)
      .finally(() => {
        dispatch({ type: SUCCES_LOGOUT });
      })
      .catch(err => err)
  );
};
