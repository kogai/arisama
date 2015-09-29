const ipc = require('ipc');
const menubar = require('menubar');
const mb = menubar({ preloadWindow: true });
const templateMenu = require('electron-template-menu');

mb.on('ready', ()=> {
  templateMenu();

  ipc.on('msg-from-renderer', (event, msg)=> {
    console.log(msg);
  });
});
