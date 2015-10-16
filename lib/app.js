import Vue from 'vue';
import { createStore } from 'redux';

import reducers from './reducers';

// Components
import addStatus from './add-status';
import postStatus from './post-status';
import setConfig from './set-config';
import changeLang from './change-lang';
import toggleConfig from './toggle-config';

export default ()=> {
  const vm = new Vue({
    el: '#view',
    data: {
      title: (()=> {
        if (window.navigator.language === 'ja') {
          return '投稿するチャンネルとアカウントの設定';
        }
        return 'Setting of post channel and account';
      }()),
      stores: createStore(reducers),
    },

    components: {
      'add-status': addStatus,
      'post-status': postStatus,
      'set-config': setConfig,
      'change-lang': changeLang,
      'toggle-config': toggleConfig,
    },
  });
  return vm;
};
