const ipc = require('ipc');
const BrowserWindow = require('browser-window');
const menubar = require('menubar');

const mb = menubar({ preloadWindow: true });
const templateMenu = require('electron-template-menu');

mb.on('ready', ()=> {
  templateMenu();

  ipc.on('create-auth-renderer', ()=> {
    console.log('create auth renderer!');

    // authRenderer
    const authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
    });
    authWindow.loadUrl('http://localhost:9000/auth');
  });

  ipc.on('emit-slack-token', (event, tokenAndTeamname)=> {
    authWindow.close();
    mb.window.webContents.send('publish-token', tokenAndTeamname);
  });
});
