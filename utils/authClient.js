const ipc = require('ipc');

// export default {
console.log('renderer start.');
ipc.send('msg-from-renderer', 'message from renderer process.');
// };
