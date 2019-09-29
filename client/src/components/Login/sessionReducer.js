import { SUCCES_LOGIN, SUCCES_LOGOUT } from '../../_redux/actionTypes';

const INITIAL_STATE = {
  user: null,
  token: null,
  authenticated: false,
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCES_LOGIN:
      return { ...action.payload, authenticated: true };

    case SUCCES_LOGOUT:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};

export default sessionReducer;
