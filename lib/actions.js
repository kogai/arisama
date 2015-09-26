import { INCREMENT, DECREMENT } from './constants';

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
