import ipc from 'ipc';
import Vue from 'vue';

import {
  updateSlack,
  updateUsers,
} from '../actions';
import template from './template';

export default Vue.extend({
  template: template,
  data() {
    return {
      access_token: this.stores.getState().slack.access_token,
      users: this.stores.getState().users,
    };
  },
  props: ['stores'],

  created() {
    ipc.on('publish-token', (tokenAndTeamname)=> {
      this.stores.dispatch(updateSlack(tokenAndTeamname));
    });

    ipc.on('publish-user-id', (userId)=> {
      this.stores.dispatch(updateSlack(userId));
    });
  },

  methods: {
    onAuthStart() {
      ipc.send('create-auth-renderer');
    },
  },
});
