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
      isSlackRegistered: this.stores.getState().isSlackRegistered,
      slack: this.stores.getState().slack,
      user: this.stores.getState().user,
      isWebhookReady: this.stores.getState().isSlackRegistered, // Slack認証処理の完了を初期状態として持つ
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.isConfigOpen = this.stores.getState().isConfigOpen;
      this.isSlackRegistered = this.stores.getState().isSlackRegistered;
      this.slack = this.stores.getState().slack;
      this.user = this.stores.getState().user;
    });

    ipc.on('publish-token', (tokenAndTeamname)=> {
      this.stores.dispatch(updateSlack(tokenAndTeamname));
    });

    ipc.on('publish-user-id', (userId)=> {
      this.stores.dispatch(updateSlack(userId));
      this.isWebhookReady = true;
    });
  },

  methods: {
    onSlackChange(slack) {
      const query = {
        token: slack.access_token,
        user: slack.id,
      };
      console.log(query);
      request
        .get(SLACK_USER_INFO)
        .query(query)
        .end((err, ret)=> {
          if (err) {
            return console.log(err);
          }
          console.log(ret);
          this.stores.dispatch(updateSlack({ url: slack.url }));
          this.stores.dispatch(updateUser(ret.body.user));
          this.stores.dispatch(toggleConfig());
        });
    },
    onAuthStart() {
      ipc.send('create-auth-renderer');
    },
  },
});
