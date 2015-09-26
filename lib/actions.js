import {
  ADD_STATUS,
  REMOVE_STATUS,
  TOGGLE_CONFIG,
  UPDATE_SLACK,
  UPDATE_USER,
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

export function updateSlack() {
  return { type: UPDATE_SLACK };
}

export function updateUser(user) {
  return { type: UPDATE_USER, user };
}
