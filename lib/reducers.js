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

/*
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(counter);

  View
  .onEventRegistered
// You can subscribe to the updates manually, or use bindings to your view layer.
store.subscribe(() =>
  console.log(store.getState())
);

// export default store;
*/
