import Vue from 'vue';
import store from 'store';
import request from 'superagent';

import config from './config.js';

export default ()=> {
  const isSlackRegistered = store.get('slackurl') && store.get('slacktoken') && store.get('slackid');
  const vm = new Vue({
    el: '#view',
    data: {
      slackurl: store.get('slackurl'),
      slacktoken: store.get('slacktoken'),
      slackid: store.get('slackid'),
      user: null,
      isSettingOpen: isSlackRegistered,
      isSlackRegistered: isSlackRegistered,
      statuses: [],
      changedStatus: ':rice: 食事中です',
      newStatus: {
        message: '',
        emoji: '',
      },
    },

    ready() {
      const currentStatus = store.get('statuses');
      if (!currentStatus) {
        store.set('statuses', config.statuses);
      }
      this.statuses = currentStatus;
    },

    methods: {
      onToggleSetting() {
        this.isSettingOpen = !this.isSettingOpen;
      },

      onStatusAdd() {
        const currentAdditinalStatus = store.get('statuses');
        const concatStatus = currentAdditinalStatus.concat(this.newStatus);

        store.set('statuses', concatStatus);
        this.statuses = concatStatus;
        this.newStatus = {
          message: '',
          emoji: '',
        };
      },

      onSlackChange() {
        store.set('slackurl', this.slackurl);
        store.set('slacktoken', this.slacktoken);
        store.set('slackid', this.slackid);

        const query = {
          token: this.slacktoken,
          user: this.slackid,
        };

        request
        .get('https://slack.com/api/users.info')
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

      onStatusChange(changedStatus) {
        request
        .post(store.get('slackurl'))
        .set('Accept', 'application/json')
        .send({
          text: changedStatus,
          username: store.get('user').name,
          icon_url: store.get('user').profile.image_72,
        })
        .end((err, ret)=> {
          if (err) {
            return console.error(err);
          }
          console.log(ret);
        });
      },
    },
  });
  return vm;
};
