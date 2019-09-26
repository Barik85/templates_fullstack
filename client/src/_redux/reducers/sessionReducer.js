import { SUCCES_LOGIN } from '../actionTypes';

const INITIAL_STATE = {
  user: null,
  token: null,
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCES_LOGIN:
      return action.payload;

    default:
      return state;
  }
};

export default sessionReducer;
