import { ADD_STATUS, REMOVE_STATUS } from './constants';

export function addStatus(status) {
  return { type: ADD_STATUS, status };
}

export function decrement(status) {
  return { type: REMOVE_STATUS, status };
}
