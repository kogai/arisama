const ipc = require('ipc');
ipc.send('emit-slack-token', 'token is emitted.');
