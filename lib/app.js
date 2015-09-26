import Vue from 'vue';
import { createStore } from 'redux';
import store from 'store';

import reducers from './reducers';

// Components
import addStatus from './add-status';
import setConfig from './set-config';
import postStatus from './post-status';
import toggleConfig from './toggle-config';

export default ()=> {
  const isSlackRegistered = store.get('slackurl') && store.get('slacktoken') && store.get('slackid');
  const vm = new Vue({
    el: '#view',
    data: {
      user: null,
      isSlackRegistered: isSlackRegistered,
      stores: createStore(reducers),
    },

    components: {
      'add-status': addStatus,
      'set-config': setConfig,
      'post-status': postStatus,
      'toggle-config': toggleConfig,
    },
  });
  return vm;
};
