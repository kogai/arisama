'use strict';

const ipc = require('ipc');

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
