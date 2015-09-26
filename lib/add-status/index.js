import Vue from 'vue';
import template from './template';
import { addStatus } from '../actions';

export default Vue.extend({
  template: template,
  data() {
    return {
      isSlackRegistered: this.stores.getState().isSlackRegistered,
      isConfigOpen: this.stores.getState().isConfigOpen,
      newStatus: {
        message: '',
        emoji: '',
      },
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.isConfigOpen = this.stores.getState().isConfigOpen;
      this.isSlackRegistered = this.stores.getState().isSlackRegistered;
    });
  },

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
