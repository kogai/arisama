import { increment, decrement } from './actions';

console.log(store.getState());

store.dispatch(increment); // 1
store.dispatch(increment); // 2
store.dispatch(decrement); // 1
