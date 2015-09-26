import { combineReducers } from 'redux';
import store from 'store';
import _ from 'lodash';

import {
  ADD_STATUS,
  REMOVE_STATUS,
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

const reducers = combineReducers({
  statuses,
});

export default reducers;
