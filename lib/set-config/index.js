import template from './template';

export default {
  template: template,
  data() {
    return {
      msg: 'hello!',
    };
  },
  created() {
    console.log('my-component created!');
  },
};
