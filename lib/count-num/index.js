import template from './template';
import { increment, decrement } from '../actions';

export default {
  template: template,
  data() {
    return {
      msg: 'hello!',
    };
  },

  props: ['stores'],

  created() {
    console.log('counter-num created!');
  },

  methods: {
    onIncrement() {
      console.log('onIncrement');
      this.stores.dispatch(increment());
    },
    onDecrement() {
      console.log('onDecrement');
      this.stores.dispatch(decrement());
    },
  },

};
