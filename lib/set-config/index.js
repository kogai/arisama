import template from './template';
import store from 'store';

import config from '../config';
const SLACK_USER_INFO = config.endpoints.slackUserInfo;

export default {
  template: template,
  data() {
    return {
      isConfigOpen: this.stores.getState().isConfigOpen,
      slackurl: store.get('slackurl'),
      slacktoken: store.get('slacktoken'),
      slackid: store.get('slackid'),
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> this.isConfigOpen = this.stores.getState().isConfigOpen);
  },

  methods: {
    onSlackChange() {
      store.set('slackurl', this.slackurl);
      store.set('slacktoken', this.slacktoken);
      store.set('slackid', this.slackid);

      const query = {
        token: this.slacktoken,
        user: this.slackid,
      };

      request
      .get(SLACK_USER_INFO)
      .query(query)
      .end((err, ret)=> {
        if (err) {
          return console.error(err);
        }
        this.user = ret.body.user;
        store.set('user', ret.body.user);

        this.isSlackRegistered = this.slackurl && this.slacktoken && this.slackid;
        this.isSettingOpen = false;
      });
    },
  },
};
