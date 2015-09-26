import request from 'superagent';
import template from './template';

export default {
  template: template,

  data() {
    return {
      statuses: this.stores.getState().statuses,
      changedStatus: ':rice: 食事中です',
    };
  },

  props: ['stores'],

  created() {
    this.stores.subscribe(()=> this.statuses = tores.getState().statuses);
  },

  methods: {
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
};
