import template from './template';
import { toggleConfig } from 'lib/actions';

export default {
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
};
