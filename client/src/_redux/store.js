import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash.throttle';
import thunk from 'redux-thunk';

import { getStateFromLS, saveStateToLS } from '../utils/localStorage';
import sessionReducer from '../components/Login/sessionReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const persistedState = getStateFromLS();
const store = createStore(sessionReducer, persistedState, enhancer);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveStateToLS({
      ...state,
    });
  }, 1000)
);

export default store;
