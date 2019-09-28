import { SUCCES_LOGIN, SUCCES_LOGOUT } from '../../_redux/actionTypes';
import { requestLogin } from '../../api/api';

export const loginUser = user => dispatch => {
  requestLogin(user)
    .then(res => {
      if (res && res.status === 200 && res.data) {
        dispatch({
          type: SUCCES_LOGIN,
          payload: res.data,
        });
      }
    })
    .catch(err => err);
};

export const logoutUser = 1;
