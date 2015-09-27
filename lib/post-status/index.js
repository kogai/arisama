import Vue from 'vue';
import request from 'superagent';
import template from './template';

function statusesToOptions(statuses) {
  return statuses.map((status)=> {
    return {
      text: status.message,
      value: `${status.emoji} ${status.message}`,
    };
  });
}

export default Vue.extend({
  template: template,

  data() {
    return {
      statuses: statusesToOptions(this.stores.getState().statuses),
      user: this.stores.getState().user,
      isSlackRegistered: this.stores.getState().isSlackRegistered,
      slack: this.stores.getState().slack,
      changedStatus: ':rice: 食事中です',
      isPosting: false,
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.statuses = statusesToOptions(this.stores.getState().statuses);
      this.isSlackRegistered = this.stores.getState().isSlackRegistered;
      this.user = this.stores.getState().user;
      this.slack = this.stores.getState().slack;
    });
  },

  methods: {
    onStatusChange(changedStatus) {
      this.isPosting = true;
      request
      .post(this.slack.url)
      .set('Accept', 'application/json')
      .send({
        text: changedStatus,
        username: this.user.name,
        icon_url: this.user.profile.image_72,
      })
      .end((err, ret)=> {
        this.isPosting = false;
        if (err) {
          return console.error(err);
        }
        console.log(ret);
      });
    },
  },
});
