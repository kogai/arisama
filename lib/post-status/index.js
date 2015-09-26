import Vue from 'vue';
import request from 'superagent';
import template from './template';

export default Vue.extend({
  template: template,

  data() {
    return {
      statuses: this.stores.getState().statuses,
      user: this.stores.getState().user,
      isSlackRegistered: this.stores.getState().isSlackRegistered,
      changedStatus: ':rice: 食事中です',
      isPosting: false,
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> {
      this.statuses = this.stores.getState().statuses;
      this.isSlackRegistered = this.stores.getState().isSlackRegistered;
      this.user = this.stores.getState().user;
    });
  },

  methods: {
    onStatusChange(changedStatus) {
      this.isPosting = true;
      request
      .post(store.get('slackurl'))
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
