import Vue from 'vue';
import template from './template';
import { toggleConfig } from '../actions';

export default Vue.extend({
  template: template,
  data() {
    return {
      isConfigOpen: this.stores.getState().isConfigOpen,
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.isConfigOpen = this.stores.getState().isConfigOpen;
    });
  },

  methods: {
    onToggleSetting() {
      this.stores.dispatch(toggleConfig());
    },
  },
});
