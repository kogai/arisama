import { combineReducers } from 'redux';
import store from 'store';
import _ from 'lodash';

import {
  ADD_STATUS,
  REMOVE_STATUS,
  TOGGLE_CONFIG,
} from './constants';

import { defaultStatuses } from './config';

const initialStatuses = store.get('statuses') || defaultStatuses;
store.set('statuses', initialStatuses);

function statuses(state = initialStatuses, action) {
  switch (action.type) {

  case ADD_STATUS:
    const addedStatuses = state.concat(action.status);
    store.set('statuses', addedStatuses);
    return addedStatuses;

  case REMOVE_STATUS:
    let removedStatus = state.map((s)=> {
      if (s !== action.status) {
        return s;
      }
    });
    removedStatus = _.compact(removedStatus);
    store.set('statuses', removedStatus);
    return removedStatus;

  default:
    return state;
  }
}

const _isSlackRegistered = (()=> {
  if (store.get('slackurl') && store.get('slacktoken') && store.get('slackid')) {
    return true;
  }
  return false;
}());

function isConfigOpen(state = !_isSlackRegistered, action) {
  switch (action.type) {
  case TOGGLE_CONFIG:
    return !state;
  default:
    return state;
  }
}

function isSlackRegistered(state = _isSlackRegistered, action) {
  switch (action.type) {
  case UPDATE_SLACK:
    return true;
  default:
    return state;
  }
}

function user(state = null, action) {
  switch (action.type) {
  case UPDATE_USER:
    store.set('user', action.user);
    return action.user;
  default:
    return state;
  }
}

const reducers = combineReducers({
  statuses,
  isConfigOpen,
  isSlackRegistered,
  user,
});

export default reducers;
