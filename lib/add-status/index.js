import template from './template';
import { addStatus } from '../actions';

export default {
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
};
