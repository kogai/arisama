import Vue from 'vue';
import { createStore } from 'redux';

import reducers from './reducers';

// Components
import addStatus from './add-status';
import postStatus from './post-status';
import setConfig from './set-config';
import toggleConfig from './toggle-config';

export default ()=> {
  const vm = new Vue({
    el: '#view',
    data: {
      stores: createStore(reducers),
    },

    components: {
      'add-status': addStatus,
      'post-status': postStatus,
      'set-config': setConfig,
      'toggle-config': toggleConfig,
    },
  });
  return vm;
};
