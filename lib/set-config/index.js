import ipc from 'ipc';

import Vue from 'vue';
import request from 'superagent';

import template from './template';
import {
  updateUser,
  updateSlack,
  toggleConfig,
} from '../actions';
import config from '../config';

const SLACK_USER_INFO = config.endpoints.slackUserInfo;

export default Vue.extend({
  template: template,
  data() {
    return {
      isConfigOpen: this.stores.getState().isConfigOpen,
      slack: this.stores.getState().slack,
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.isConfigOpen = this.stores.getState().isConfigOpen;
      this.slack = this.stores.getState().slack;
    });

    ipc.on('publish-token', (tokenAndTeamname)=> {
      this.stores.dispatch(updateSlack(tokenAndTeamname));
    });

    ipc.on('publish-user-id', (userId)=> {
      this.stores.dispatch(updateSlack(userId));
    });
  },

  methods: {
    onSlackChange() {
      const query = {
        token: this.slack.token,
        user: this.slack.id,
      };
      request
        .get(SLACK_USER_INFO)
        .query(query)
        .end((err, ret)=> {
          if (err) {
            return console.log(err);
          }
          console.log(ret);
          this.stores.dispatch(updateSlack(this.slack));
          this.stores.dispatch(updateUser(ret.body.user));
          this.stores.dispatch(toggleConfig());
        });
    },
    onAuthStart() {
      ipc.send('create-auth-renderer');
    },
  },
});
