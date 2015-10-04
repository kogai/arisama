import Vue from 'vue';
import { createStore } from 'redux';

import reducers from '../../lib/reducers';

export default function createInstance(name, component) {
  const node = document.createElement(name);
  node.setAttribute('stores', '{{ stores }}');
  document.body.appendChild(node);

  let components = {};
  components[name] = component;

  const vm = new Vue({
    el: 'body',
    data: {
      stores: createStore(reducers),
    },
    components: components,
  });

  return vm.$children[0];
}
