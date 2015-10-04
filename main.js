'use strict';

const ipc = require('ipc');
const BrowserWindow = require('browser-window');
const menubar = require('menubar');

const mb = menubar({ preloadWindow: true });
const templateMenu = require('electron-template-menu');

mb.on('ready', ()=> {
  templateMenu();
  mb.window.loadUrl('file://' + __dirname + '/lib/index.html');

  let authWindow = null;
  ipc.on('create-auth-renderer', ()=> {
    // Slack認証のリダイレクトURLを描画するためのレンダラー
    authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
    });
    authWindow.loadUrl('https://arisama.herokuapp.com/auth');
  });

  ipc.on('emit-slack-token', (event, tokenAndTeamname)=> {
    mb.window.webContents.send('publish-token', tokenAndTeamname);
  });

  ipc.on('emit-user-id', (event, userId)=> {
    authWindow.close();
    mb.window.webContents.send('publish-user-id', userId);
  });
});
