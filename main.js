'use strict';

const ipc = require('ipc');
const BrowserWindow = require('browser-window');
const menubar = require('menubar');

const mb = menubar({ preloadWindow: true });
const templateMenu = require('electron-template-menu');

mb.on('ready', ()=> {
  templateMenu();
  // mb.window.show();

  let authWindow = null;
  ipc.on('create-auth-renderer', ()=> {
    // authRenderer
    authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
    });
    authWindow.loadUrl('http://localhost:9000/auth');
  });

  ipc.on('emit-slack-token', (event, tokenAndTeamname)=> {
    mb.window.webContents.send('publish-token', tokenAndTeamname);
  });

  ipc.on('emit-user-id', (event, userId)=> {
    authWindow.close();
    mb.window.webContents.send('publish-user-id', userId);
  });
});
