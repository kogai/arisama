import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './constants';

function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + 1;
  case DECREMENT:
    return state - 1;
  default:
    return state;
  }
}

const counterApp = combineReducers({
  counter,
});

export default counterApp;
