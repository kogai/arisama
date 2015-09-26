import Vue from 'vue';
import { createStore } from 'redux';
import store from 'store';

import counterApp from './reducers';

// components
import addStatus from './add-status';
import setConfig from './set-config';
import postStatus from './post-status';
import countNum from './count-num';

import config from './config.js';

const stores = createStore(counterApp);

stores.subscribe(() =>
  console.log(stores.getState().counter)
);

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
      stores: stores,
    },

    components: {
      'add-status': addStatus,
      'set-config': setConfig,
      'post-status': postStatus,
      'count-num': countNum,
    },

    ready() {
      const currentStatus = store.get('statuses');
      if (!currentStatus) {
        store.set('statuses', config.statuses);
      }
      this.statuses = currentStatus;
      // stores.dispatch(increment());
      // stores.dispatch(increment());
      // stores.dispatch(decrement());
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
