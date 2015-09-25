export default {
  template: '<span>{{msg}}</span>',
  data() {
    return {
      msg: 'hello!',
    };
  },
  created() {
    console.log('my-component created!');
  },
};
