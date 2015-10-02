import ipc from 'ipc';
import Vue from 'vue';
import request from 'superagent';

import { updateSlack } from '../actions';
import template from './template';
import config from './config';
// config.endpoints.slackUserList

function hasString(str) {
  if (str) {
    return true;
  }
  return false;
}

export default Vue.extend({
  template: template,
  data() {
    return {
      access_token: this.stores.getState().slack.access_token,
      slackUsers: [],
      hasSlackToken: hasString(this.stores.getState().slack.access_token),
    };
  },
  props: ['stores'],

  created() {
    ipc.on('publish-token', (tokenAndTeamname)=> {
      this.stores.dispatch(updateSlack(tokenAndTeamname));
    });

    this.$watch('hasSlackToken', (newVal, oldVal)=> {
      if (oldVal) {
        let _this = this;
        request
          .get(config.endpoints.slackUserList)
          .query({
            token: this.access_token,
          })
          .end((err, ret)=> {
            if (err) {
              return console.log(err);
            }
            console.log(ret.body);
            _this.slackUsers = ret.body.members;
          });
      }
    });
  },

  methods: {
    onAuthStart() {
      ipc.send('create-auth-renderer');
    },

    selectUser(selectedUser) {
      console.log(`selected user id: ${selectedUser}`);
    },
  },
});
