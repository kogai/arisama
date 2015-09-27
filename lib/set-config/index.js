import Vue from 'vue';
import template from './template';
import {
  updateUser,
  updateSlack,
  toggleConfig,
} from 'lib/actions';
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
          return console.error(err);
        }
        this.stores.dispatch(updateUser(ret.body.user));
        this.stores.dispatch(updateSlack(this.slack));
        this.stores.dispatch(toggleConfig());
      });
    },
  },
});
