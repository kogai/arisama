import ipc from 'ipc';
import Vue from 'vue';
import template from './template';

export default Vue.extend({
  template: template,
  data() {
    return {};
  },
  props: ['stores'],

  methods: {
    onAuthStart() {
      ipc.send('create-auth-renderer');
      ipc.on('publish-token', (token)=> {
        console.log('token recieved in main process client.');
        console.log(token);
      });
    },
  },
});
