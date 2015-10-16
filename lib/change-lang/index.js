import Vue from 'vue';
import store from 'store';
import template from './template';

export default Vue.extend({
  template: template,
  data() {
    return {
      isSlackRegistered: this.stores.getState().isSlackRegistered,
      isConfigOpen: this.stores.getState().isConfigOpen,
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
    onChangeLang(lang) {
      store.set('lang', lang);
      store.remove('statuses');
      window.location.reload();
    },
  },
});
