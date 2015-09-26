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
    return state.concat(action.status);
  case REMOVE_STATUS:
    const removedStatus = state.map((s)=> {
      if (s !== action.status) {
        return s;
      }
    });
    return _.compact(removedStatus);
  default:
    return state;
  }
}

const reducers = combineReducers({
  statuses,
});

export default reducers;
