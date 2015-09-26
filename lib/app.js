import Vue from 'vue';
import { createStore } from 'redux';
import store from 'store';

import reducers from './reducers';

// Components
import addStatus from './add-status';
import setConfig from './set-config';
import postStatus from './post-status';

export default ()=> {
  const isSlackRegistered = store.get('slackurl') && store.get('slacktoken') && store.get('slackid');
  const vm = new Vue({
    el: '#view',
    data: {
      user: null,
      isSettingOpen: isSlackRegistered,
      isSlackRegistered: isSlackRegistered,
      statuses: [],
      newStatus: {
        message: '',
        emoji: '',
      },
      stores: createStore(reducers),
    },

    components: {
      'add-status': addStatus,
      'set-config': setConfig,
      'post-status': postStatus,
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

    },
  });
  return vm;
};
