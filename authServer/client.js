'use strict';

const ipc = require('ipc');
const SLACK_USER_LIST = 'https://slack.com/api/users.list';

function queryParser(str) {
  const queries = str.substring(1).split('&');
  let parsed = {};

  queries.forEach((query)=> {
    const keyProp = query.split('=');
    parsed[keyProp[0]] = keyProp[1];
  });
  return parsed;
}

const queries = queryParser(location.search);
ipc.send('emit-slack-token', queries);

const vm = new Vue({
  el: '#view',
  data: {
    users: [],
    isAuthenticate: false,
  },

  created() {
    const _this = this;
    request
      .get(SLACK_USER_LIST)
      .query({
        token: queries.access_token,
      })
      .end((err, ret)=> {
        if (err) {
          return console.log(err);
        }
        _this.users = ret.body.members;
      });
  },

  methods: {
    selectUser(id) {
      this.isAuthenticate = true;
      setTimeout(()=> {
        ipc.send('emit-user-id', { id: id });
      }, 3000);
    },
  },
});
