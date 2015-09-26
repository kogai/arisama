import Vue from 'vue';
import template from './template';
import { addStatus } from '../actions';

export default Vue.extend({
  template: template,
  data() {
    return {
      newStatus: {
        message: '',
        emoji: '',
      },
    };
  },
  props: ['stores'],

  methods: {
    onStatusAdd() {
      this.stores.dispatch(addStatus(this.newStatus));
      this.newStatus = {
        message: '',
        emoji: '',
      };
    },
  },
});
