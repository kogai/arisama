import ipc from 'ipc';
import Vue from 'vue';
import template from './template';

export default Vue.extend({
  template: template,
  data() {
    return {};
  },
  props: ['stores'],

  created() {
    ipc.on('publish-token', (tokenAndTeamname)=> {
      this.stores.dispatch(updateSlack(tokenAndTeamname));
    });

  },

  methods: {
    onAuthStart() {
      ipc.send('create-auth-renderer');
    },
  },
});
