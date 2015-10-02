import { combineReducers } from 'redux';
import store from 'store';
import _ from 'lodash';

import {
  ADD_STATUS,
  REMOVE_STATUS,
  TOGGLE_CONFIG,
  UPDATE_SLACK,
  UPDATE_USER,
} from './constants';

import initialState from './initialState';

function statuses(state = initialState.statuses, action) {
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

function isConfigOpen(state = !initialState.slackRegistration, action) {
  switch (action.type) {
  case TOGGLE_CONFIG:
    return !state;
  default:
    return state;
  }
}

function isSlackRegistered(state = initialState.slackRegistration, action) {
  switch (action.type) {
  case UPDATE_SLACK:
    return true;
  default:
    return state;
  }
}

function merge(src, dest) {
  for (let key in dest) {
    if (dest.hasOwnProperty(key)) {
      src[key] = dest[key];
    }
  }
  return src;
}

function slack(state = initialState.slack, action) {
  switch (action.type) {
  case UPDATE_SLACK:
    const mergedSlack = merge(state, action.slack);
    store.set('slack', mergedSlack);
    return mergedSlack;
  default :
    return state;
  }
}

function user(state = initialState.user, action) {
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
  slack,
});

export default reducers;
