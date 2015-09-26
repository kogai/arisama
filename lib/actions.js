import {
  ADD_STATUS,
  REMOVE_STATUS,
  TOGGLE_CONFIG,
} from './constants';

export function addStatus(status) {
  return { type: ADD_STATUS, status };
}

export function removeStatus(status) {
  return { type: REMOVE_STATUS, status };
}

export function toggleConfig() {
  return { type: TOGGLE_CONFIG };
}
