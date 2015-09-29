import remote from 'remote';
import Vue from 'vue';
import template from './template';

const BrowserWindow = remote.require('browser-window');
const ipc = require('ipc');

export default Vue.extend({
  template: template,
  data() {
    return {};
  },
  props: ['stores'],

  methods: {
    onAuthStart() {
      const authWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: true,
        'node-integration': false,
      });
      // authWindow.loadUrl('http://localhost:9000/auth');
      authWindow.loadUrl('http://localhost:9000/auth/callback');

      // ipc.send('msg-from-renderer', 'message from renderer process.');
    },
  },
});
